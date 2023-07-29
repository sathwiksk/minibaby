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

if (isDarkModeEnabled) {
  document.body.classList.add('night-mode');
}

updateButtonStyles();

function hideModeButtonsForMobile() {
  const modeButtons = document.querySelector('.mode-buttons');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 900) {
    modeButtons.style.display = 'none';
  } else {
    modeButtons.style.display = 'flex';
  }
}

hideModeButtonsForMobile();
window.addEventListener('resize', hideModeButtonsForMobile);

function setContainerSize() {
  const coomeetContainer = document.getElementById('coomeet_container');
  const screenWidth = window.innerWidth;

  if (screenWidth <= 900) {
    coomeetContainer.style.width = '100vw';
    coomeetContainer.style.height = '100vh';
    coomeetContainer.style.borderRadius = '10px';
  } else {
    coomeetContainer.style.width = '1000px';
    coomeetContainer.style.height = '600px';
    coomeetContainer.style.borderRadius = '20px';
  }
}

setContainerSize();
window.addEventListener('resize', setContainerSize);
