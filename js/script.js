document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            // Special case for index.html when accessed as root (e.g., yourdomain.com/)
            link.classList.add('active-link');
        }
    });

    // Funzione per animazioni on scroll (opzionale, se vuoi attivarla)
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('animate__fadeInUp'); // Esempio con Animate.css
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, { threshold: 0.1 });

    // document.querySelectorAll('.content-section').forEach(section => {
    //     observer.observe(section);
    // });
});