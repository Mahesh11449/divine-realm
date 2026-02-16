document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');

  // Toggle side menu open/close and update ARIA
  menuBtn.addEventListener('click', () => {
    const isActive = sideMenu.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  // Close menu when clicking outside (optional nicer UX)
  document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      sideMenu.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Keyboard accessibility: toggle on Enter/Space for menu items
  sideMenu.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('menu-link')) {
      e.preventDefault();
      e.target.click();
    }
  });

  // Mapping for redirects (fallback) and local content toggles
  const sections = {
    puranas: '/divine realm/html/pp1.html',
    vedas:   '/divine realm/html/vedas.html',
    avatharas: '/divine realm/html/avatharas.html',
    avatars: '/divine realm/html/avatharas.html',
    stories: '/divine realm/html/stories.html',
    upload:  '/divine realm/html/upload.html'
  };

  const contentSections = document.querySelectorAll('.grid-section');
  const closeBtn = document.getElementById('closeContent');

  Object.keys(sections).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        // close menu
        sideMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');

        const localId = id + '-section';
        const localEl = document.getElementById(localId);

        if (localEl) {
          // hide others and show selected
          contentSections.forEach(s => s.hidden = true);
          localEl.hidden = false;
          setTimeout(() => localEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
        } else {
          // fallback to redirect if no local section exists
          setTimeout(() => {
            window.location.href = sections[id];
          }, 120);
        }
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      contentSections.forEach(s => s.hidden = true);
    });
  }
});
