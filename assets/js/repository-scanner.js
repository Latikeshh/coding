/**
 * Live GitHub REST API Repository Scanner & Automatic Course Discovery Engine
 * Dynamically discovers repository tree, course folders, subfolders, and HTML lesson files.
 */
(function () {
  'use strict';

  var REPO_OWNER = 'Latikeshh';
  var REPO_NAME = 'coding';
  var BRANCH = 'main';
  var API_URL = 'https://api.github.com/repos/' + REPO_OWNER + '/' + REPO_NAME + '/git/trees/' + BRANCH + '?recursive=1';
  var CACHE_KEY = 'LEARN_CODING_TREE_CACHE_V1';

  var CourseTreeData = null;
  var ScanPromise = null;

  function naturalSort(a, b) {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  }

  function parseRepositoryTree(treeArray) {
    var courses = {
      CSS: { overview: 'index.html', lessons: [] },
      C: { overview: 'index.html', lessons: [] },
      CPP: { overview: 'index.html', lessons: [] },
      HTML: { overview: 'index.html', lessons: [] },
      JS: { overview: 'index.html', lessons: [] },
      Python: { overview: 'index.html', lessons: [] },
      Java: { overview: 'index.html', lessons: [] },
      SQL: { overview: 'index.html', lessons: [] },
      'Git-and-GitHub': { overview: 'index.html', lessons: [] }
    };

    var pathMap = {};

    treeArray.forEach(function (item) {
      if (item.type !== 'blob') return;
      var path = item.path;
      if (!path.endsWith('.html')) return;

      var parts = path.split('/');
      var courseKey = parts[0];

      if (!courses[courseKey]) return;

      if (parts.length === 2 && parts[1] === 'index.html') {
        courses[courseKey].overview = 'index.html';
        return;
      }

      if (!pathMap[courseKey]) {
        pathMap[courseKey] = {};
      }

      var relPath = parts.slice(1).join('/');

      if (parts.length === 2) {
        // Standalone lesson directly under course dir (e.g. CSS/01-setup-css.html)
        pathMap[courseKey][relPath] = {
          type: 'file',
          title: formatTitle(parts[1]),
          href: relPath
        };
      } else if (parts.length === 3) {
        // Nested subfolder item (e.g. CSS/09-css-units/01-absolute-units.html or index.html)
        var folderName = parts[1];
        var fileName = parts[2];

        if (!pathMap[courseKey][folderName]) {
          pathMap[courseKey][folderName] = {
            type: 'folder',
            title: formatTitle(folderName),
            href: folderName + '/index.html',
            subItems: {}
          };
        }

        if (fileName === 'index.html') {
          pathMap[courseKey][folderName].href = folderName + '/index.html';
        } else {
          pathMap[courseKey][folderName].subItems[fileName] = {
            title: formatTitle(fileName),
            href: folderName + '/' + fileName
          };
        }
      }
    });

    // Convert pathMap into sorted lesson arrays for each course
    Object.keys(pathMap).forEach(function (courseKey) {
      var courseObj = pathMap[courseKey];
      var sortedKeys = Object.keys(courseObj).sort(naturalSort);

      sortedKeys.forEach(function (key) {
        var node = courseObj[key];
        if (node.type === 'file') {
          courses[courseKey].lessons.push({
            title: node.title,
            href: node.href
          });
        } else if (node.type === 'folder') {
          var subKeys = Object.keys(node.subItems).sort(naturalSort);
          var subItemsList = subKeys.map(function (subKey) {
            return node.subItems[subKey];
          });
          courses[courseKey].lessons.push({
            title: node.title,
            href: node.href,
            subItems: subItemsList
          });
        }
      });
    });

    return courses;
  }

  function formatTitle(filename) {
    var name = filename.replace(/\.html$/, '');
    name = name.replace(/-/g, ' ');
    // Capitalize numerical prefixes if present (e.g. "01 setup css" -> "01. Setup Css")
    var match = name.match(/^(\d+)\s+(.*)$/);
    if (match) {
      var num = match[1];
      var rest = match[2];
      rest = rest.split(' ').map(function(w) {
        return w.charAt(0).toUpperCase() + w.slice(1);
      }).join(' ');
      return num + '. ' + rest;
    }
    return name.split(' ').map(function(w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(' ');
  }

  function fetchFromGitHubAPI() {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', API_URL, true);
      xhr.timeout = 8000;

      xhr.onload = function () {
        if (xhr.status === 200) {
          try {
            var data = JSON.parse(xhr.responseText);
            if (data && data.tree) {
              var parsedCourses = parseRepositoryTree(data.tree);
              // Save to Session Storage Cache
              try {
                sessionStorage.setItem(CACHE_KEY, JSON.stringify(parsedCourses));
              } catch (e) {}
              resolve(parsedCourses);
            } else {
              reject(new Error('Invalid Git tree data response'));
            }
          } catch (err) {
            reject(err);
          }
        } else {
          reject(new Error('GitHub API Error: ' + xhr.status));
        }
      };

      xhr.onerror = function () {
        reject(new Error('Network Connection Error'));
      };

      xhr.ontimeout = function () {
        reject(new Error('GitHub API Request Timeout'));
      };

      xhr.send();
    });
  }

  function getCourseTree(courseKey) {
    if (CourseTreeData && CourseTreeData[courseKey]) {
      return Promise.resolve(CourseTreeData[courseKey]);
    }

    // Try Session Storage Cache First
    try {
      var cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        CourseTreeData = JSON.parse(cached);
        if (CourseTreeData && CourseTreeData[courseKey]) {
          return Promise.resolve(CourseTreeData[courseKey]);
        }
      }
    } catch (e) {}

    // Issue Shared API Promise
    if (!ScanPromise) {
      ScanPromise = fetchFromGitHubAPI().then(function (data) {
        CourseTreeData = data;
        return CourseTreeData;
      }).catch(function (err) {
        console.warn('Live GitHub API unavailable, utilizing fallback snapshot data.', err);
        // Fallback to static snapshot data if window.NAVIGATION_SNAPSHOT exists
        if (window.NAVIGATION_SNAPSHOT) {
          CourseTreeData = window.NAVIGATION_SNAPSHOT;
          return CourseTreeData;
        }
        throw err;
      });
    }

    return ScanPromise.then(function (data) {
      return data[courseKey] || null;
    });
  }

  window.RepositoryScanner = {
    getCourseTree: getCourseTree,
    parseRepositoryTree: parseRepositoryTree
  };
})();
