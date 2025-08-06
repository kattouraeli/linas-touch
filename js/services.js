document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".services-categories li");
  const cards = document.querySelectorAll(".card");
  const catTitle = document.getElementById("cat-title");

  const categoryTitles = {
    all: "All Services",
    nails: "Nail Care & Design",
    wax: "Hair Removal & Shaping",
    hair: "Hair Styling & Care",
    makeup: "Makeup Artistry"
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('cat-active'));
      button.classList.add('cat-active');

      const filterGroup = button.getAttribute('data-group');

      // Update category title
      if (catTitle) {
        catTitle.textContent = categoryTitles[filterGroup] || "Services";
      }

      cards.forEach(card => {
        const groups = card.getAttribute('data-groups');
        const groupArray = groups ? JSON.parse(groups) : [];

        if (filterGroup === 'all' || groupArray.includes(filterGroup)) {
          // Show with animation
          card.style.display = 'block';

          // Force reflow and animate
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.maxHeight = '1000px';
            card.style.padding = '16px';
          });
        } else {
          // Animate hide
          card.style.opacity = '0';
          card.style.maxHeight = '0';
          card.style.padding = '0';

          // After opacity transition, set display none
          card.addEventListener('transitionend', function handler(e) {
            if (e.propertyName === 'opacity' && card.style.opacity === '0') {
              card.style.display = 'none';
              card.removeEventListener('transitionend', handler);
            }
          });
        }
      });
    });
  });

  // Card description toggle
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
    });
  });
});
