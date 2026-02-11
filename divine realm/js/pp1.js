// Smooth fade-in + click redirection for Purana cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".purana-card");

  // Fade-in animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // Redirect on click
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Get the Purana name from the h2 text (e.g., "Vishnu Purana")
      const puranaName = card.querySelector("h2").textContent
        .toLowerCase()
        .replace(/\s+/g, "-"); // convert to lowercase-hyphen format

      // Redirect to a corresponding HTML page
      window.location.href = `/divine realm/puranas/${puranaName}.html`;
    });
  });
});
