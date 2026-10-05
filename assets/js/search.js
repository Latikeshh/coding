/**
 * Smart Fuzzy Search Engine for Learn Coding
 * Features: Typo tolerance (Levenshtein distance), content snippet indexing,
 * relevance scoring, multi-word tokens, term highlighting, and Ctrl+K shortcuts.
 */
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchContainer = document.getElementById('search-container');
  const searchShortcut = document.getElementById('search-shortcut');

  if (!searchInput || !searchResults) return;

  let selectedIndex = -1;

  // Shortcut label (⌘K on Mac, Ctrl+K on Windows/Linux)
  if (searchShortcut) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    searchShortcut.textContent = isMac ? '⌘K' : 'Ctrl+K';
  }

  function getSearchIndex() {
    return window.SEARCH_INDEX || [];
  }

  // Calculate Levenshtein Distance for typo tolerance
  function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  // Check if token matches target string exactly or fuzzily (with typos)
  function matchToken(queryToken, text) {
    if (!queryToken || !text) return { matched: false, score: 0 };
    const textLower = text.toLowerCase();

    // Exact substring match
    if (textLower.includes(queryToken)) {
      return { matched: true, score: 20 };
    }

    // Split target text into words for fuzzy comparison
    const targetWords = textLower.split(/[^a-z0-9]+/);
    for (const word of targetWords) {
      if (!word || word.length < 2) continue;

      // Prefix match
      if (word.startsWith(queryToken) || queryToken.startsWith(word)) {
        return { matched: true, score: 15 };
      }

      // Fuzzy typo match (allow 1-2 edit distance)
      const maxDistance = queryToken.length > 5 ? 2 : (queryToken.length >= 3 ? 1 : 0);
      if (maxDistance > 0 && Math.abs(word.length - queryToken.length) <= maxDistance) {
        const dist = levenshteinDistance(queryToken, word);
        if (dist <= maxDistance) {
          return { matched: true, score: 10 - dist };
        }
      }
    }

    return { matched: false, score: 0 };
  }

  // Smart relevance-based search query processor
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

    const scoredResults = [];

    searchIndex.forEach(item => {
      let totalScore = 0;
      let matchedTokensCount = 0;

      queryTokens.forEach(token => {
        let tokenMatched = false;
        let highestTokenScore = 0;

        // Match in Title
        const titleMatch = matchToken(token, item.title);
        if (titleMatch.matched) {
          tokenMatched = true;
          highestTokenScore = Math.max(highestTokenScore, titleMatch.score * 3);
        }

        // Match in File name
        const fileMatch = matchToken(token, item.file);
        if (fileMatch.matched) {
          tokenMatched = true;
          highestTokenScore = Math.max(highestTokenScore, fileMatch.score * 2);
        }

        // Match in Course name
        const courseMatch = matchToken(token, item.course);
        if (courseMatch.matched) {
          tokenMatched = true;
          highestTokenScore = Math.max(highestTokenScore, courseMatch.score * 1.5);
        }

        // Match in Lesson Snippet Content
        if (item.snippet) {
          const snippetMatch = matchToken(token, item.snippet);
          if (snippetMatch.matched) {
            tokenMatched = true;
            highestTokenScore = Math.max(highestTokenScore, snippetMatch.score);
          }
        }

        if (tokenMatched) {
          matchedTokensCount++;
          totalScore += highestTokenScore;
        }
      });

      // Require all tokens or majority tokens to match
      const requiredMatches = queryTokens.length > 1 ? Math.ceil(queryTokens.length * 0.5) : 1;
      if (matchedTokensCount >= requiredMatches && totalScore > 0) {
        scoredResults.push({
          item: item,
          score: totalScore + (matchedTokensCount * 10)
        });
      }
    });

    // Sort by highest score first
    scoredResults.sort((a, b) => b.score - a.score);

    renderResults(scoredResults.map(r => r.item), query);
  }

  // Render search results UI
  function renderResults(matches, query) {
    selectedIndex = -1;
    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <span class="no-results-icon">🔍</span>
          <p>No lessons found for "<strong>${escapeHtml(query)}</strong>"</p>
          <span class="search-tip">Try searching by topic (e.g., C++, Python, Flexbox, Pointers, Arrays, SQL)</span>
        </div>
      `;
      searchResults.style.display = 'block';
      return;
    }

    const topMatches = matches.slice(0, 10);

    let html = `
      <div class="search-results-header">
        <span>Found Lessons (${matches.length})</span>
        <span class="search-nav-hint">Use ↑ ↓ to navigate, Enter to select</span>
      </div>
      <ul class="search-results-list" role="listbox">
    `;

    topMatches.forEach((item, index) => {
      const courseClass = item.course_id ? item.course_id.toLowerCase().replace(/[^a-z0-9_-]/g, '-') : 'default';
      const snippetPreview = item.snippet ? highlightText(item.snippet, query) : '';

      html += `
        <li class="search-result-item" data-index="${index}">
          <a href="${item.url}" class="search-result-link" tabIndex="-1">
            <div class="search-result-title-group">
              <span class="search-result-title">${highlightText(item.title, query)}</span>
              ${snippetPreview ? `<span class="search-result-snippet">${snippetPreview}</span>` : ''}
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
