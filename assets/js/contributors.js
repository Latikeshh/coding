/**
 * Dynamic Automated GitHub Contributor Fetcher for Learn Coding
 * Automatically fetches repository contributors via GitHub REST API,
 * calculates total contributor count, and renders interactive contributor cards.
 */
document.addEventListener('DOMContentLoaded', function () {
  const contributorGrid = document.getElementById('dynamic-contributor-cards');
  const contributorBadgeCount = document.getElementById('contributor-badge-count');

  if (!contributorGrid) return;

  async function fetchContributors() {
    try {
      const response = await fetch('https://api.github.com/repos/Latikeshh/coding/contributors?per_page=100');
      if (!response.ok) throw new Error('Failed to fetch contributors from GitHub API');

      const contributors = await response.json();

      if (contributorBadgeCount) {
        contributorBadgeCount.textContent = `${contributors.length} Active Contributors`;
      }

      if (contributors.length === 0) {
        contributorGrid.innerHTML = '<p class="text-muted">No contributors found yet.</p>';
        return;
      }

      let html = '<div class="contributor-cards-wrapper">';

      contributors.forEach(user => {
        html += `
          <div class="contributor-card">
            <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="contributor-link">
              <img src="${user.avatar_url}" alt="${user.login}" class="contributor-avatar" loading="lazy" />
              <div class="contributor-info">
                <span class="contributor-name">@${escapeHtml(user.login)}</span>
                <span class="contributor-commits">${user.contributions} ${user.contributions === 1 ? 'commit' : 'commits'}</span>
              </div>
            </a>
          </div>
        `;
      });

      html += '</div>';
      contributorGrid.innerHTML = html;

    } catch (err) {
      console.warn('GitHub API Contributor fetch notice:', err);
      // Fallback message
      contributorGrid.innerHTML = `
        <div class="contributor-fallback-notice">
          <p>View live contributor statistics directly on GitHub:</p>
          <a href="https://github.com/Latikeshh/coding/graphs/contributors" target="_blank" class="nav-back-btn">
            View Contributors on GitHub →
          </a>
        </div>
      `;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  fetchContributors();
});
