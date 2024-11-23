// Select all yoda containers
const cards = document.querySelectorAll('.yoda');

cards.forEach((card) => {
  const bgImage = card.querySelector('.bg-image');

  // Apply hover effect on each card
  card.addEventListener('mouseover', () => {
    bgImage.style.borderRadius = '15px'; // Add border-radius
    bgImage.src = bgImage.src.replace('.jpg', '-hover.jpg'); // Change to hover image
  });

  card.addEventListener('mouseout', () => {
    bgImage.src = bgImage.src.replace('-hover.jpg', '.jpg'); // Revert to original image
  });
});
