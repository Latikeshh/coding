/**
 * Centralized Sidebar Rendering Engine & Mobile Drawer Controller
 */
(function () {
  'use strict';

  function getPageRelPath(courseName) {
    var path = window.location.pathname.replace(/\\/g, '/');
    var marker = '/' + courseName + '/';
    var idx = path.indexOf(marker);
    if (idx !== -1) {
      return path.substring(idx + marker.length);
    }
    // Fallback: extract filename or index
    var parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function initSidebar() {
    var sidebarEl = document.getElementById('sidebar');
    if (!sidebarEl) return;

    var courseKey = sidebarEl.getAttribute('data-course') || 'CSS';
    var courseData = window.SIDEBAR_DATA ? window.SIDEBAR_DATA[courseKey] : null;
    if (!courseData) return;

    var pageRelPath = getPageRelPath(courseKey);
    // Count subfolders to compute prefix back to course root
    var pathSegments = pageRelPath.split('/').filter(Boolean);
    var depth = pathSegments.length > 1 ? pathSegments.length - 1 : 0;

    var prefix = depth > 0 ? '../'.repeat(depth) : '';
    var rootPrefix = '../'.repeat(depth + 1);

    // Build Sidebar Inner HTML
    var html = '';

    // 1. Sidebar Header
    html += '<div class="sidebar-header">';
    html += '  <a href="' + rootPrefix + 'index.html" class="site-brand">';
    html += '    <span class="brand-logo">&#128187;</span>';
    html += '    <div class="brand-text">';
    html += '      <span class="brand-name">Coding</span>';
    html += '      <span class="brand-tagline">Developer Hub</span>';
    html += '    </div>';
    html += '  </a>';
    html += '  <div class="search-container">';
    html += '    <div class="search-input-wrapper">';
    html += '      <span class="search-icon">&#128269;</span>';
    html += '      <input type="text" id="search-input" class="search-input" placeholder="Search lessons..." autocomplete="off">';
    html += '      <span class="search-shortcut">Ctrl K</span>';
    html += '    </div>';
    html += '    <div id="search-results" class="search-results"></div>';
    html += '  </div>';
    html += '</div>';

    // 2. Sidebar Navigation
    html += '<div class="sidebar-nav">';
    html += '  <div class="nav-back-container">';
    html += '    <a href="' + rootPrefix + 'index.html" class="nav-back-btn">';
    html += '      <span class="back-arrow">&larr;</span> All Courses';
    html += '    </a>';
    html += '  </div>';
    html += '  <div class="course-nav-header">';
    html += '    <span class="course-header-title">' + courseData.title + '</span>';
    html += '    <span class="course-header-badge">' + courseData.badge + '</span>';
    html += '  </div>';

    // 3. Lessons Menu
    html += '  <ul class="nav-menu course-lessons-menu">';
    for (var i = 0; i < courseData.lessons.length; i++) {
      var item = courseData.lessons[i];
      var itemHref = prefix + item.href;
      var isActive = (pageRelPath === item.href);
      var activeClass = isActive ? ' active' : '';

      html += '    <li class="nav-item">';
      html += '      <a href="' + itemHref + '" class="nav-link' + activeClass + '">';
      html += '        <span class="nav-bullet">&bull;</span>';
      html += '        <span class="nav-title">' + item.title + '</span>';
      html += '      </a>';

      if (item.subItems && item.subItems.length > 0) {
        html += '      <ul class="nav-sub-menu">';
        for (var j = 0; j < item.subItems.length; j++) {
          var sub = item.subItems[j];
          var subHref = prefix + sub.href;
          var isSubActive = (pageRelPath === sub.href);
          var subActiveClass = isSubActive ? ' active' : '';

          html += '        <li class="nav-sub-item">';
          html += '          <a href="' + subHref + '" class="nav-sub-link' + subActiveClass + '">' + sub.title + '</a>';
          html += '        </li>';
        }
        html += '      </ul>';
      }

      html += '    </li>';
    }
    html += '  </ul>';
    html += '</div>';

    // 4. Sidebar Footer
    html += '<div class="sidebar-footer">';
    html += '  <a href="https://github.com/Latikeshh/coding" target="_blank" rel="noopener noreferrer" class="github-link">';
    html += '    <svg class="github-icon" height="20" width="20" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>';
    html += '    <span>View on GitHub</span>';
    html += '  </a>';
    html += '</div>';

    sidebarEl.innerHTML = html;

    // Attach Mobile Sidebar Toggle Listeners
    setupMobileDrawer(sidebarEl);
  }

  function setupMobileDrawer(sidebarEl) {
    var toggleBtn = document.getElementById('sidebar-toggle');
    var overlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
      if (sidebarEl) sidebarEl.classList.add('active');
      if (overlay) overlay.classList.add('active');
    }

    function closeSidebar() {
      if (sidebarEl) sidebarEl.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    }

    function toggleSidebar() {
      if (sidebarEl && sidebarEl.classList.contains('active')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    }

    if (toggleBtn) toggleBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebarEl && sidebarEl.classList.contains('active')) {
        closeSidebar();
      }
    });

    var navLinks = sidebarEl.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeSidebar);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
  } else {
    initSidebar();
  }
})();
