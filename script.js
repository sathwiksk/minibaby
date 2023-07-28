
function toggleNightMode() {
    const body = document.body;
    body.classList.toggle('night-mode'); 
  }
  
 
  function updateButtonStyles() {
    const isNightMode = document.body.classList.contains('night-mode');
    const dayModeButton = document.getElementById('day-mode-button');
    const nightModeButton = document.getElementById('night-mode-button');
  
    dayModeButton.classList.toggle('active-mode', !isNightMode);
    nightModeButton.classList.toggle('active-mode', isNightMode);
  }
  
  
  document.getElementById('day-mode-button').addEventListener('click', () => {
    document.body.classList.remove('night-mode'); 
    updateButtonStyles();
  });
  
  document.getElementById('night-mode-button').addEventListener('click', () => {
    toggleNightMode();
    updateButtonStyles();
  });
  
  
  const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set default mode based on system preference
  if (isDarkModeEnabled) {
    document.body.classList.add('night-mode');
  }
  
  
  updateButtonStyles();
  