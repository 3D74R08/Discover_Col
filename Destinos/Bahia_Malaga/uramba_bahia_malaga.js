// Inicializar Swiper en los carruseles
const foodCarousel = new Swiper('.food-carousel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Cambio de idioma
document.getElementById('langSwitch').addEventListener('click', () => {
    const enElements = document.querySelectorAll('.lang-en');
    const esElements = document.querySelectorAll('.lang-es');
    
    enElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? '' : 'none';
    });
    
    esElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? '' : 'none';
    });
});

// Efecto de navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// Mostrar/ocultar detalles de tours
document.querySelectorAll('.tour-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tourId = btn.getAttribute('data-tour');
        const overlay = document.createElement('div');
        overlay.className = 'detail-overlay';
        overlay.style.display = 'flex';
        
        const content = document.createElement('div');
        content.className = 'detail-content';
        
        const closeBtn = document.createElement('span');
        closeBtn.className = 'detail-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => {
            overlay.remove();
        });
        
        content.appendChild(closeBtn);
        overlay.appendChild(content);
        document.body.appendChild(overlay);
    });
});
