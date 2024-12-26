const showPopupButton = document.getElementById('showPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popupOverlay = document.getElementById('popupOverlay');
const popupBox = document.getElementById('popupBox');

showPopupButton.addEventListener('click', () => {
    popupOverlay.classList.add('popup-overlay-show');
    popupBox.classList.add('popup-show');
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.classList.remove('popup-overlay-show');
    popupBox.classList.remove('popup-show');
});

popupOverlay.addEventListener('click', () => {
    popupOverlay.classList.remove('popup-overlay-show');
    popupBox.classList.remove('popup-show');
});

