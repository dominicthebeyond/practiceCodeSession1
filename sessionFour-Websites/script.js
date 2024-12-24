// Select cards and arrows
const cards = document.querySelectorAll('.card');
const cardCount = cards.length;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Ensure a maximum of 3 cards are displayed
cards.forEach((card, index) => {
    card.style.display = index < 3 ? 'block' : 'none';
});

// Add smooth transitions using CSS classes (not inline styles)
cards.forEach(card => {
    card.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
});

// Show or hide arrows based on card count
const displayValue = cardCount <= 3 ? 'none' : 'block';
leftArrow.style.display = displayValue;
rightArrow.style.display = displayValue;
