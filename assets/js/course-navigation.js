/**
 * Dynamic Breadcrumbs & Previous/Next Navigation Engine
 */
(function () {
  'use strict';

  function getPageRelPath(courseKey) {
    var path = window.location.pathname.replace(/\\/g, '/');
    var marker = '/' + courseKey + '/';
    var idx = path.indexOf(marker);
    if (idx !== -1) {
      return path.substring(idx + marker.length);
    }
    var parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function initCourseNavigation() {
    var sidebarEl = document.getElementById('sidebar');
    if (!sidebarEl) return;

    var courseKey = sidebarEl.getAttribute('data-course') || 'CSS';
    var courseRegistry = window.COURSE_REGISTRY ? window.COURSE_REGISTRY[courseKey] : null;
    if (!courseRegistry) return;

    var pageRelPath = getPageRelPath(courseKey);
    var pathSegments = pageRelPath.split('/').filter(Boolean);
    var depth = pathSegments.length > 1 ? pathSegments.length - 1 : 0;

    var prefix = depth > 0 ? '../'.repeat(depth) : '';
    var rootPrefix = '../'.repeat(depth + 1);

    // 1. Render Breadcrumbs if container exists
    var breadcrumbEl = document.getElementById('breadcrumb-container') || document.querySelector('.breadcrumb');
    if (breadcrumbEl) {
      var bHtml = '<a href="' + rootPrefix + 'index.html">Home</a> &gt; ';
      bHtml += '<a href="' + prefix + 'index.html">' + (courseRegistry.title.split(' ')[0] || courseKey) + '</a>';

      if (pathSegments.length === 1 && pathSegments[0] !== 'index.html') {
        bHtml += ' &gt; <span>' + formatSegment(pathSegments[0]) + '</span>';
      } else if (pathSegments.length > 1) {
        bHtml += ' &gt; <a href="' + prefix + pathSegments[0] + '/index.html">' + formatSegment(pathSegments[0]) + '</a>';
        bHtml += ' &gt; <span>' + formatSegment(pathSegments[pathSegments.length - 1]) + '</span>';
      }
      breadcrumbEl.innerHTML = bHtml;
    }
  }

  function formatSegment(seg) {
    return seg.replace(/\.html$/, '').replace(/-/g, ' ').replace(/^\d+\s*/, '');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCourseNavigation);
  } else {
    initCourseNavigation();
  }
})();
