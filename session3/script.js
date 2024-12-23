const root = document.documentElement;
const body = document.body;
const lightModeSpan = document.querySelector('.light-mode'); // Get the light mode span
const darkModeSpan = document.querySelector('.dark-mode'); // Get the dark mode span

// Function to toggle dark mode
function toggleDarkMode() {
    // Check if the light mode span is visible
    if (lightModeSpan.classList.contains('visible')) {
        // Switch to dark mode
        lightModeSpan.classList.remove('visible');
        lightModeSpan.classList.add('hidden');

        darkModeSpan.classList.remove('hidden');
        darkModeSpan.classList.add('visible');

        // Apply dark mode styles to the document
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        console.log('Switched to dark mode!');
    } else {
        // Switch to light mode
        lightModeSpan.classList.remove('hidden');
        lightModeSpan.classList.add('visible');

        darkModeSpan.classList.remove('visible');
        darkModeSpan.classList.add('hidden');

        // Apply light mode styles to the document
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        console.log('Switched to light mode!');
    }
}

// Attach the event listener to the light mode span for testing
lightModeSpan.addEventListener('click', toggleDarkMode);
darkModeSpan.addEventListener('click', toggleDarkMode);
