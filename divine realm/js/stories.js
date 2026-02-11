document.addEventListener('DOMContentLoaded', () => {

  // 1️⃣ Redirect on clicking Inspirational Stories cards
  const storyCards = document.querySelectorAll('.story-card');
  storyCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.id; // e.g., 'story1'
      window.location.href = `/divine realm/html/${id}.html`;
    });
  });

  // 2️⃣ Redirect on clicking Moral Stories cards
  const moralCards = document.querySelectorAll('.moral-card');
  moralCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.id; // e.g., 'moral1'
      window.location.href = `/divine realm/html/${id}.html`;
    });
  });

  // 3️⃣ Facts toggle
  const factsSection = document.querySelector('.facts-section');
  const factsGrid = document.querySelector('.facts-grid');

  if (factsSection && factsGrid) {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Show All Facts ▼';
    toggleBtn.classList.add('facts-toggle');
    factsSection.appendChild(toggleBtn);

    const factCards = factsGrid.querySelectorAll('.fact-card');

    // Hide facts beyond first 3 initially
    factCards.forEach((card, index) => {
      if (index > 2) card.style.display = 'none';
    });

    // Toggle display on click
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.textContent.includes('▲');
      factCards.forEach((card, index) => {
        if (index > 2) card.style.display = isExpanded ? 'none' : 'block';
      });
      toggleBtn.textContent = isExpanded ? 'Show All Facts ▼' : 'Hide Facts ▲';
    });
  }

});
