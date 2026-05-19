
//
const body = document.documentElement;
const you = document.getElementsByClassName('you')[0];
const yourAura = document.getElementsByClassName('your-aura')[0];
const duration = getComputedStyle(document.documentElement).getPropertyValue('--animation-time');

// Apply theme based on system preference initially
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (!prefersDark) {
    body.classList.add('light-theme');
}

// Listen to system theme change in real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
    }
});

if (you && yourAura) {
  let isTransitioning = false;

  const handleToggle = (e) => {
      // Prevent default to stop simulated click when touchstart is fired
      if (e.type === 'touchstart') {
          e.preventDefault();
      }
      
      if (isTransitioning) return;
      isTransitioning = true;

      yourAura.classList.remove("you-come");
      yourAura.classList.add("you-go");
      you.classList.remove("show-aura");

      setTimeout(() => {
          body.classList.toggle('light-theme');
          yourAura.classList.add("you-come");
          yourAura.classList.remove("you-go");
          you.classList.add("show-aura");
          
          // Reset the transition flag after the animation completes
          setTimeout(() => {
              isTransitioning = false;
          }, 100);
      }, parseInt(duration) * 1000);
  };

  you.addEventListener('click', handleToggle);
  you.addEventListener('touchstart', handleToggle, { passive: false });
}