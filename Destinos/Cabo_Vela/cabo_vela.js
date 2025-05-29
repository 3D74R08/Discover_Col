// Aquí puedes agregar el JS que estaba en el archivo HTML original, si existía.
// Por ahora, este archivo está listo para scripts futuros.

// Inicializar AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Efecto de scroll en la navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll suave para enlaces de ancla
// (excepto si el href es solo #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      // Cerrar menú móvil si está abierto
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    }
  });
});

// Inicializar Swiper para el carrusel de comida
enableFoodSwiper();
function enableFoodSwiper() {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.food-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
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
  }
}

// Funcionalidad de cambio de idioma
const languageSwitch = document.getElementById('languageSwitch');
const savedLanguage = localStorage.getItem('language');
if (savedLanguage === 'en') {
  languageSwitch.checked = true;
  updateLanguage('en');
} else {
  updateLanguage('es');
}
languageSwitch.addEventListener('change', function() {
  if (this.checked) {
    updateLanguage('en');
    localStorage.setItem('language', 'en');
  } else {
    updateLanguage('es');
    localStorage.setItem('language', 'es');
  }
});
function updateLanguage(lang) {
  document.querySelectorAll('[data-lang-es], [data-lang-en]').forEach(element => {
    const text = element.getAttribute(`data-lang-${lang}`);
    if (text) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  });
}

// Envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert(languageSwitch.checked ? 'Please fill in all fields.' : 'Por favor complete todos los campos.');
    return;
  }
  if (!isValidEmail(email)) {
    alert(languageSwitch.checked ? 'Please enter a valid email address.' : 'Por favor ingrese un correo electrónico válido.');
    return;
  }
  alert(languageSwitch.checked ? 
    'Thank you for your message! This is a prototype, in the full version we would process your request.' : 
    '¡Gracias por tu mensaje! Esto es un prototipo, en la versión completa procesaríamos tu solicitud.');
  this.reset();
});
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Animación fade-in para secciones
const fadeElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
fadeElements.forEach(element => {
  fadeInObserver.observe(element);
});
