// Menú overlay
const menuToggle = document.getElementById('menuToggle');
const navOverlay = document.getElementById('navOverlay');

menuToggle.addEventListener('click', () => {
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
});

// Cerrar overlay al hacer click en enlaces
document.querySelectorAll('[data-close]').forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Cerrar overlay con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Animación de entrada para elementos al hacer scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar tarjetas de servicio y slides de galería
document.querySelectorAll('.service-large-card, .gallery-slide').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.classList.add('anim-ready');
    observer.observe(el);
});

// Clase visible activa la animación
const styleAnim = document.createElement('style');
styleAnim.textContent = `
    .anim-ready.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(styleAnim);