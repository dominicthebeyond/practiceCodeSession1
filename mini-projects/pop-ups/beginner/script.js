const showPopupButton = document.getElementById('showPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popupOverlay = document.getElementById('popupOverlay');
const popupBox = document.getElementById('popupBox');

showPopupButton.addEventListener("click", () => {
    popupOverlay.style.display = 'block';
    popupBox.style.display = 'block';
});

closePopupButton.addEventListener("click", () => {
    popupOverlay.style.display = 'none';
    popupBox.style.display = 'none';
});

popupOverlay.addEventListener("click", () => {
    popupOverlay.style.display = 'none';
    popupBox.style.display = 'none';
});


