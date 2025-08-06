document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".services-categories li");
  const cards = document.querySelectorAll(".card");
  const catTitle = document.getElementById("cat-title");

  // Map filter categories to desired titles
  const categoryTitles = {
    all: "All Services",
    nails: "Nail Care & Design",
    wax: "Hair Removal & Shaping",
    hair: "Hair Styling & Care",
    makeup: "Makeup Artistry"
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all filter buttons
      filterButtons.forEach((btn) => btn.classList.remove("cat-active"));
      // Add active class to clicked filter button
      button.classList.add("cat-active");

      const filterCategory = button.innerText.trim().toLowerCase();

      // Update the category title
      if (catTitle) {
        catTitle.textContent = categoryTitles[filterCategory] || "Services";
      }

      // Filter cards based on category
      cards.forEach((card) => {
        if (filterCategory === "all") {
          card.style.display = "block";
        } else {
          if (card.id.toLowerCase() === filterCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
            // Collapse card if hidden
            card.classList.remove("active");
          }
        }
      });
    });
  });

  // Toggle card description on card click (accordion behavior)
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => {
        if (c !== card) {
          c.classList.remove("active");
        }
      });

      card.classList.toggle("active");
    });
  });
});
