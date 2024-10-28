window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const body = document.body;

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        body.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        body.classList.remove('scrolled');
    }
});
