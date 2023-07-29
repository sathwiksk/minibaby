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
    coomeetContainer.style.setProperty('width', window.innerWidth + 'px', 'important');
    coomeetContainer.style.setProperty('height', window.innerHeight + 'px', 'important');
    coomeetContainer.style.setProperty('border-radius', '10px', 'important');
  } else {
    coomeetContainer.style.setProperty('width', '1000px', 'important');
    coomeetContainer.style.setProperty('height', '600px', 'important');
    coomeetContainer.style.setProperty('border-radius', '20px', 'important');
  }
}
setContainerSize();
window.addEventListener('resize', setContainerSize);
