/**
 * Smart Client-Side Search Engine for Learn Coding
 * Instant zero-latency search across 260+ lessons with keyboard shortcuts (Ctrl+K).
 */
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchContainer = document.getElementById('search-container');
  const searchShortcut = document.getElementById('search-shortcut');

  if (!searchInput || !searchResults) return;

  let selectedIndex = -1;

  // Detect OS for shortcut label (⌘K on Mac, Ctrl+K on Windows/Linux)
  if (searchShortcut) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    searchShortcut.textContent = isMac ? '⌘K' : 'Ctrl+K';
  }

  // Get search data index
  function getSearchIndex() {
    return window.SEARCH_INDEX || [];
  }

  // Perform filtering
  function performSearch(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      selectedIndex = -1;
      return;
    }

    const searchIndex = getSearchIndex();
    const queryTokens = query.split(/\s+/).filter(Boolean);

    // Score and filter results
    const matches = searchIndex.filter(item => {
      const titleLower = item.title ? item.title.toLowerCase() : '';
      const courseLower = item.course ? item.course.toLowerCase() : '';
      const fileLower = item.file ? item.file.toLowerCase() : '';

      return queryTokens.every(token =>
        titleLower.includes(token) ||
        courseLower.includes(token) ||
        fileLower.includes(token)
      );
    });

    renderResults(matches, query);
  }

  // Render search results UI
  function renderResults(matches, query) {
    selectedIndex = -1;
    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <span class="no-results-icon">🔍</span>
          <p>No lessons found for "<strong>${escapeHtml(query)}</strong>"</p>
          <span class="search-tip">Try searching by topic (e.g., C++, Python, Flexbox, Pointers, Arrays)</span>
        </div>
      `;
      searchResults.style.display = 'block';
      return;
    }

    // Limit to top 10 matches for fast response
    const topMatches = matches.slice(0, 10);

    let html = `
      <div class="search-results-header">
        <span>Matching Lessons (${matches.length})</span>
        <span class="search-nav-hint">Use ↑ ↓ to navigate, Enter to select</span>
      </div>
      <ul class="search-results-list" role="listbox">
    `;

    topMatches.forEach((item, index) => {
      const courseClass = item.course_id ? item.course_id.toLowerCase().replace(/[^a-z0-9_-]/g, '-') : 'default';
      html += `
        <li class="search-result-item" data-index="${index}">
          <a href="${item.url}" class="search-result-link" tabIndex="-1">
            <div class="search-result-title-group">
              <span class="search-result-title">${highlightText(item.title, query)}</span>
              <span class="search-result-file">${escapeHtml(item.file)}</span>
            </div>
            <span class="search-result-badge badge-${courseClass}">${escapeHtml(item.course)}</span>
          </a>
        </li>
      `;
    });

    html += `</ul>`;
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';

    // Add click event listeners
    const resultItems = searchResults.querySelectorAll('.search-result-item');
    resultItems.forEach(item => {
      item.addEventListener('click', function (e) {
        const link = item.querySelector('a');
        if (link && link.href) {
          window.location.href = link.href;
        }
      });
      item.addEventListener('mouseenter', function () {
        setSelectedIndex(parseInt(item.getAttribute('data-index')));
      });
    });
  }

  // Highlight matched terms
  function highlightText(text, query) {
    if (!text) return '';
    const escapedText = escapeHtml(text);
    if (!query) return escapedText;
    const queryTokens = query.split(/\s+/).filter(Boolean);
    let pattern = queryTokens.map(t => escapeRegExp(t)).join('|');
    if (!pattern) return escapedText;
    const regex = new RegExp(`(${pattern})`, 'gi');
    return escapedText.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function setSelectedIndex(index) {
    const items = searchResults.querySelectorAll('.search-result-item');
    items.forEach(i => i.classList.remove('selected'));
    selectedIndex = index;
    if (selectedIndex >= 0 && selectedIndex < items.length) {
      items[selectedIndex].classList.add('selected');
      items[selectedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  // Input listeners
  searchInput.addEventListener('focus', function () {
    if (searchInput.value.trim().length > 0) {
      performSearch(searchInput.value);
    }
  });

  searchInput.addEventListener('input', function () {
    performSearch(this.value);
  });

  // Keyboard navigation
  searchInput.addEventListener('keydown', function (e) {
    const items = searchResults.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
      setSelectedIndex(nextIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
      setSelectedIndex(prevIndex);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && selectedIndex < items.length) {
        e.preventDefault();
        const activeLink = items[selectedIndex].querySelector('a');
        if (activeLink && activeLink.href) {
          window.location.href = activeLink.href;
        }
      }
    } else if (e.key === 'Escape') {
      searchResults.style.display = 'none';
      searchInput.blur();
    }
  });

  // Global Keyboard Shortcut (Ctrl+K or /)
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    } else if (e.key === 'Escape') {
      searchResults.style.display = 'none';
    }
  });

  // Hide search results when clicking outside
  document.addEventListener('click', function (e) {
    if (searchContainer && !searchContainer.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
});
