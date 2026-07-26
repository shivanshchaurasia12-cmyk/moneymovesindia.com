// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a link is tapped
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Blog listing — category filter
const filterBar = document.getElementById('filterBar');
const postGrid = document.getElementById('postGrid');
const emptyState = document.getElementById('emptyState');

function applyFilter(cat) {
  const cards = postGrid.querySelectorAll('.post-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const match = cat === 'all' || card.dataset.category === cat;
    card.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });
  emptyState.classList.toggle('is-visible', visibleCount === 0);

  filterBar.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('is-active', chip.dataset.filter === cat);
  });
}

if (filterBar && postGrid) {
  const params = new URLSearchParams(window.location.search);
  const initialCat = params.get('cat') || 'all';
  applyFilter(initialCat);

  filterBar.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.filter;
      applyFilter(cat);
      const url = new URL(window.location);
      if (cat === 'all') {
        url.searchParams.delete('cat');
      } else {
        url.searchParams.set('cat', cat);
      }
      window.history.replaceState({}, '', url);
    });
  });
}

// Newsletter form — placeholder handler until Formspree endpoint is added
const newsletterForm = document.querySelector('.newsletter__form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Newsletter signup will go live once the email form is connected.');
  });
}
