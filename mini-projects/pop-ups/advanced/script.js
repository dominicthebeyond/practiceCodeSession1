const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupBox = document.getElementById('popupBox');
    const popupForm = document.getElementById('popupForm');
    const userInput = document.getElementById('userInput');
    const errorMessage = document.getElementById('errorMessage');

    // Open popup with animation
    openPopupButton.addEventListener('click', () => {
      errorMessage.textContent = ''; // Clear error message
      popupOverlay.classList.add('popup-overlay-show');
      popupBox.classList.add('popup-show');
      userInput.focus(); // Focus input field
    });

    // Close popup
    closePopupButton.addEventListener('click', () => {
      closePopup();
    });

    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) closePopup();
    });

    const closePopup = () => {
      popupOverlay.classList.remove('popup-overlay-show');
      popupBox.classList.remove('popup-show');
    };

    // Handle form submission
    popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputValue = userInput.value.trim();

      // Validate input
      if (!inputValue) {
        errorMessage.textContent = 'Input cannot be empty!';
        return;
      } else if (inputValue.length < 3) {
        errorMessage.textContent = 'Input must be at least 3 characters long!';
        return;
      }

      // Save input to local storage
      localStorage.setItem('popupInput', inputValue);

      // Display success and close popup
      alert(`You submitted: ${inputValue}`);
      userInput.value = '';
      closePopup();
    });

    // Load saved data from local storage on popup open
    const loadSavedData = () => {
      const savedData = localStorage.getItem('popupInput');
      if (savedData) {
        alert(`Previously saved data: ${savedData}`);
      }
    };

    openPopupButton.addEventListener('click', loadSavedData);