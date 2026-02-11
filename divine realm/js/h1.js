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

  // Redirect mapping (includes upload)
  const sections = {
    puranas: '/divine realm/html/pp1.html',
    vedas:   '/divine realm/html/vedas.html',
    avatars: '/divine realm/html/avatharas.html',
    stories: '/divine realm/html/stories.html',
    upload:  '/divine realm/html/upload.html'   // <-- Upload redirect
  };

  Object.keys(sections).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        // close menu nicely before redirecting
        sideMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');

        // small delay so user sees menu close (optional)
        setTimeout(() => {
          window.location.href = sections[id];
        }, 120);
      });
    }
  });
});
