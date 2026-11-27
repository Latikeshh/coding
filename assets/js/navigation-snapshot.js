/**
 * Offline Navigation Snapshot Fallback
 * Used when GitHub API is offline or rate limited.
 */
(function () {
  'use strict';

  if (window.SIDEBAR_DATA) {
    window.NAVIGATION_SNAPSHOT = window.SIDEBAR_DATA;
  }
})();
