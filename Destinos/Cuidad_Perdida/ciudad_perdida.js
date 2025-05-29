// Inicializar AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Inicializar Tour Swiper
const tourSwiper = new Swiper('.tour-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.tour-swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.tour-swiper .swiper-button-next',
    prevEl: '.tour-swiper .swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Inicializar Accommodation Swiper
const accommodationSwiper = new Swiper('.accommodation-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.accommodation-swiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Desplazamiento suave para enlaces de ancla
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Funcionalidad de cambio de idioma
const languageToggle = document.getElementById('language-toggle');
if (languageToggle) {
  let currentLanguage = 'es'; // Idioma por defecto
  languageToggle.addEventListener('click', function() {
    if (currentLanguage === 'es') {
      currentLanguage = 'en';
      languageToggle.innerHTML = '<span class="language-text font-bold">EN</span> / <span class="language-text">ES</span>';
      alert('This is a prototype. In the full version, the site would switch to English.');
    } else {
      currentLanguage = 'es';
      languageToggle.innerHTML = '<span class="language-text">EN</span> / <span class="language-text font-bold">ES</span>';
      alert('This is a prototype. In the full version, the site would switch to Spanish.');
    }
  });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Por favor completa todos los campos del formulario.');
      return;
    }
    alert('This is a prototype. In the full version, your message would be sent to our team.');
    contactForm.reset();
  });
}

// Inicializar animaciones personalizadas
function initAnimations() {
  window.addEventListener('scroll', function() {
    // Animaciones personalizadas según el scroll
  });
}
document.addEventListener('DOMContentLoaded', function() {
  initAnimations();
});
