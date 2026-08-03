const menuButton = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.classList.toggle('active');
    navLinks.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.classList.remove('active');
      navLinks.classList.remove('active');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
