const showPopupButton = document.getElementById('showPopupButton');
const popupOverlay = document.getElementById('popupOverlay');
const popupBox = document.getElementById('popupBox');
const popupForm = document.getElementById('popupForm');
const userInput = document.getElementById('userInput');
const errorMessage = document.getElementById('errorMessage');
const closePopupButton = document.getElementById('closePopupButton');

showPopupButton.addEventListener('click', () => {
    errorMessage.textContent = '';
    popupOverlay.classList.add('popup-overlay-show');
    popupBox.classList.add('popup-show');
    userInput.focus();
    // textcontent, classLists, focus
});


