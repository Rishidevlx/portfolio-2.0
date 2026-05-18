// Premium Dynamic Slider Pagination Logic for Projects & Experience, and Infinite Marquee for Testimonials

// 1. Projects Pagination (3 items per page)
const initProjectsPagination = () => {
  const cards = document.querySelectorAll('.project-card');
  const prevBtn = document.getElementById('project-prev-btn');
  const nextBtn = document.getElementById('project-next-btn');
  const infoText = document.getElementById('project-pagination-info');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: "0px 0px" });

  if (!cards.length) return;

  cards.forEach(card => observer.observe(card));

  if (!prevBtn || !nextBtn || !infoText) return;

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;

  const showPage = (pageNumber) => {
    currentPage = pageNumber;
    
    cards.forEach((card, index) => {
      const start = (currentPage - 1) * cardsPerPage;
      const end = start + cardsPerPage;

      if (index >= start && index < end) {
        card.style.display = 'block';
        setTimeout(() => {
          card.classList.add('in-view');
        }, 30);
      } else {
        card.style.display = 'none';
      }
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    infoText.textContent = `Page ${currentPage} of ${totalPages}`;
  };

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      showPage(currentPage - 1);
      document.getElementById('Projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
      document.getElementById('Projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  showPage(1);
};

// 2. Experience Pagination (4 items per page with dynamic DOM append/remove to preserve pseudo-class borders)
const initExperiencePagination = () => {
  const container = document.getElementById('ex-cards');
  if (!container) return;

  const allCards = Array.from(container.querySelectorAll('.ex-card'));
  const prevBtn = document.getElementById('ex-prev-btn');
  const nextBtn = document.getElementById('ex-next-btn');
  const infoText = document.getElementById('ex-pagination-info');

  if (!allCards.length) return;
  if (!prevBtn || !nextBtn || !infoText) return;

  const cardsPerPage = 4;
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  let currentPage = 1;

  const showPage = (pageNumber) => {
    currentPage = pageNumber;
    
    // Clear container to reset DOM pseudo-selectors (:first-child, :last-child, :even, :odd)
    container.innerHTML = '';

    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const pageCards = allCards.slice(start, end);

    pageCards.forEach(card => {
      container.appendChild(card);
      card.style.display = 'block';
      setTimeout(() => {
        card.classList.add('in-view');
      }, 30);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    infoText.textContent = `Page ${currentPage} of ${totalPages}`;
  };

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      showPage(currentPage - 1);
      document.getElementById('Experience').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
      document.getElementById('Experience').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  showPage(1);
};

// 3. Infinite Autoscrolling Marquee for Testimonials
const initTestimonialsMarquee = () => {
  const track = document.getElementById('testimonials-track');
  if (!track) return;

  // Prevent double cloning during Next.js client-side re-renders / HMR hot-reloads
  if (track.classList.contains('marquee-initiated')) return;
  track.classList.add('marquee-initiated');

  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  if (cards.length < 2) return;

  // Make sure they show block and reset custom absolute animations so they scroll smoothly
  cards.forEach(card => {
    card.style.display = 'block';
    
    const feedback = card.querySelector('.testimonial-card-feedback');
    const connector = card.querySelector('.testimonial-card-and-client-connector');
    const clientBox = card.querySelector('.testimonial-card-client');
    
    if (feedback) {
      feedback.style.transform = 'none';
      feedback.style.animation = 'none';
    }
    if (connector) {
      connector.style.transform = 'none';
      connector.style.animation = 'none';
    }
    if (clientBox) {
      clientBox.style.transform = 'none';
      clientBox.style.animation = 'none';
    }
  });

  // Clone each card and append to track for infinite layout loop
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });
};

// Next.js strategy safe check: readyState check handles dynamic loading seamlessly!
const initAllSliders = () => {
  initProjectsPagination();
  initExperiencePagination();
  initTestimonialsMarquee();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllSliders);
} else {
  initAllSliders();
}
