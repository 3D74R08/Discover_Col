// Swiper para testimonios
const testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Swiper para alojamientos
const accommodationSwiper = new Swiper('.accommodation-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Botón volver arriba
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Cambio de idioma
const languageToggle = document.getElementById('language-toggle');
const currentLanguage = document.getElementById('current-language');
const currentFlag = document.getElementById('current-flag');
let isSpanish = true;
languageToggle.addEventListener('click', () => {
    isSpanish = !isSpanish;
    if (isSpanish) {
        currentLanguage.textContent = 'Español';
        currentFlag.src = 'https://cdn.pixabay.com/photo/2012/04/10/23/01/spain-26886_1280.png';
    } else {
        currentLanguage.textContent = 'English';
        currentFlag.src = 'https://cdn.pixabay.com/photo/2013/07/13/14/15/united-kingdom-162295_1280.png';
    }
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.textContent = isSpanish ? element.getAttribute('data-es') : element.getAttribute('data-en');
    });
});

// Validación de formulario de contacto
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert(isSpanish ?
            '¡Gracias por tu mensaje! Te contactaremos pronto.' :
            'Thank you for your message! We will contact you soon.');
        contactForm.reset();
    }
});

// Mapa interactivo (prototipo)
const interactiveMap = document.getElementById('interactive-map');
interactiveMap.addEventListener('mouseover', () => {
    // Aquí se pueden agregar interacciones reales en la versión final
});
