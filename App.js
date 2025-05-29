// Código JavaScript extraído del <script id="app-script">
async function runLoop(loopId, payload) {
  const res = await fetch(`https://magicloops.dev/api/loop/${loopId}/run`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}

const destinationSwiper = new Swiper('.destination-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.custom-navbar');
  if (window.scrollY > 50) navbar.classList.add('navbar-scrolled');
  else navbar.classList.remove('navbar-scrolled');
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => fadeObserver.observe(el));
});

document.querySelectorAll('.map-area').forEach(area => {
  area.addEventListener('mouseenter', () => {
    const tt = document.getElementById(area.id + 'Tooltip');
    tt.style.top = area.offsetTop + 'px';
    tt.style.left = area.offsetLeft + area.offsetWidth + 'px';
    tt.style.display = 'block';
  });
  area.addEventListener('mouseleave', () => {
    document.getElementById(area.id + 'Tooltip').style.display = 'none';
  });
});

const destModal = document.getElementById('destinationModal');
destModal.addEventListener('show.bs.modal', async event => {
  const btn = event.relatedTarget;
  const destId = btn.getAttribute('data-destination');
  const modalContent = document.getElementById('modalContent');
  const data = await runLoop('37201941-b56b-4188-93a3-623edf938c15', { destinationId: destId, language: 'en' });
  modalContent.innerHTML = `
    <img src="${data.image}" alt="${data.title}" class="destination-modal-img">
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Best time to visit:</strong> ${data.bestTime}</p>
    <h4>Highlights:</h4>
    <ul class="destination-features">
      ${data.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <div class="d-flex justify-content-between mt-4">
      <a href="javascript:void(0)" class="btn btn-primary btn-book-tour">Book a Tour</a>
      <a href="javascript:void(0)" class="btn btn-outline-secondary">View on Map</a>
    </div>
  `;
});

document.body.addEventListener('click', async e => {
  if (e.target.matches('.btn-book-tour, .btn-culinary')) {
    const name    = prompt('Your name');
    const email   = prompt('Your email');
    const message = prompt('Your message or tour details');
    if (!name || !email || !message) return alert('All fields required');
    await runLoop('38000ca9-8e65-4e2d-b7e3-456bf3542270', { name, email, message });
    alert('Thank you! Your inquiry has been sent.');
  }
});

// --- INICIO BLOQUE DE TRADUCCIÓN AUTOMÁTICA ---
const languageButtons = document.querySelectorAll('.language-selector .btn');

async function translateText(text, targetLang) {
  const response = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, source: 'auto', target: targetLang })
  });
  const data = await response.json();
  return data.translatedText;
}

async function translateDOMAttributes(targetLang = 'es') {
  const attributesToTranslate = ['alt', 'title', 'placeholder'];
  const elements = document.querySelectorAll('*');
  for (const el of elements) {
    for (const attr of attributesToTranslate) {
      const original = el.getAttribute(attr);
      if (original && original.trim()) {
        try {
          const translated = await translateText(original, targetLang);
          el.setAttribute(attr, translated);
        } catch (error) {
          console.error(`Error translating ${attr} of element:`, el, error);
        }
      }
    }
  }
}

languageButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const selectedLanguage = button.textContent.toLowerCase();
    let targetLang = 'es';
    if (selectedLanguage === 'en') targetLang = 'en';
    else if (selectedLanguage === 'fr') targetLang = 'fr';
    else if (selectedLanguage === 'pt') targetLang = 'pt';

    // Cambia el estado visual del botón activo
    languageButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Traduce textos visibles principales
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const exploreBtn = document.querySelector('.btn-explore');
    const planBtn = document.querySelector('.btn-planning');
    const destinationsBtn = document.querySelector('.btn-destinations');
    const aboutTitle = document.querySelector('#about .section-title');
    const gastronomyTitle = document.querySelector('#gastronomy .section-title');
    const destinationsTitle = document.querySelector('#destinations .section-title');
    const planTitle = document.querySelector('#plan .section-title');
    const historyTitle = document.querySelector('.text-success');
    const paragraphs = document.querySelectorAll('#about .col-md-6 p');

    if (heroTitle) heroTitle.textContent = await translateText(heroTitle.textContent, targetLang);
    if (heroSubtitle) heroSubtitle.textContent = await translateText(heroSubtitle.textContent, targetLang);
    if (exploreBtn) exploreBtn.textContent = await translateText(exploreBtn.textContent, targetLang);
    if (planBtn) planBtn.textContent = await translateText(planBtn.textContent, targetLang);
    if (destinationsBtn) destinationsBtn.textContent = await translateText(destinationsBtn.textContent, targetLang);
    if (aboutTitle) aboutTitle.textContent = await translateText(aboutTitle.textContent, targetLang);
    if (gastronomyTitle) gastronomyTitle.textContent = await translateText(gastronomyTitle.textContent, targetLang);
    if (destinationsTitle) destinationsTitle.textContent = await translateText(destinationsTitle.textContent, targetLang);
    if (planTitle) planTitle.textContent = await translateText(planTitle.textContent, targetLang);
    if (historyTitle) historyTitle.textContent = await translateText(historyTitle.textContent, targetLang);
    if (paragraphs && paragraphs.length > 0) {
      for (let p of paragraphs) {
        p.textContent = await translateText(p.textContent, targetLang);
      }
    }

    // Traduce atributos alt, title y placeholder
    await translateDOMAttributes(targetLang);
  });
});
// --- FIN BLOQUE DE TRADUCCIÓN AUTOMÁTICA ---
