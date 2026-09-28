// Menu mobile
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primary-nav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Lien de navigation actif au scroll
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.primary-nav a');

const highlightNav = () => {
  let currentId = sections[0]?.id;
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('is-active', isActive);
  });
};

window.addEventListener('scroll', highlightNav);
highlightNav();

// Filtre des projets
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.hidden = !matches;
    });
  });
});

// Validation du formulaire de contact
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

const fields = [
  {
    input: document.getElementById('name'),
    error: document.getElementById('nameError'),
    validate: (value) => value.trim().length > 0,
    message: 'Merci de renseigner votre nom.',
  },
  {
    input: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: 'Merci de renseigner une adresse email valide.',
  },
  {
    input: document.getElementById('message'),
    error: document.getElementById('messageError'),
    validate: (value) => value.trim().length > 0,
    message: 'Merci de renseigner un message.',
  },
];

const validateField = (field) => {
  const isValid = field.validate(field.input.value);
  field.input.setAttribute('aria-invalid', String(!isValid));
  field.error.textContent = isValid ? '' : field.message;
  return isValid;
};

fields.forEach((field) => {
  field.input.addEventListener('blur', () => validateField(field));
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formSuccess.hidden = true;

  const allValid = fields.map(validateField).every(Boolean);
  if (!allValid) return;

  // Pas de backend branché pour l'instant : simple confirmation visuelle.
  formSuccess.hidden = false;
  contactForm.reset();
});

// Animation d'apparition au scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => revealObserver.observe(el));

// Année du footer
document.getElementById('year').textContent = new Date().getFullYear();
