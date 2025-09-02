document.addEventListener('DOMContentLoaded', () => {
    let navBar = document.querySelector('nav');
    let menuToggle = document.getElementById('menu-toggle');
    let navbarLinks = document.getElementById('navbar-links');

    // Scroll effect
    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navBar.style.background = 'white';
            navBar.style.boxShadow = '0 5px 20px rgba(190, 190, 190, 0.15)';
        } else {
            navBar.style.background = 'transparent';
            navBar.style.boxShadow = 'none';
        }
    });

    // Hamburger toggle
    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});
