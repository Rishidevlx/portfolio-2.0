// Premium Fluid Glass Refractive Magnifier Effect
const initAboutMagnifier = () => {
  const container = document.querySelector('.about-clean-content-box');
  const lens = document.querySelector('.fluid-glass-lens');
  const magText = document.querySelector('.magnified-text');
  
  if (!container || !lens || !magText) return;

  const lensSize = 160; // 160px diameter
  const scale = 1.35;   // 1.35x magnification ratio

  // Function to align and position everything
  const updateMagnifier = (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Align the lens container
    lens.style.left = `${x - lensSize / 2}px`;
    lens.style.top = `${y - lensSize / 2}px`;

    // Ensure width matches the standard text container exactly for pixel alignment
    magText.style.width = `${rect.width}px`;

    // Offset the magnified text to maintain visual alignment under scale
    magText.style.left = `${-x * scale + lensSize / 2}px`;
    magText.style.top = `${-y * scale + lensSize / 2}px`;
  };

  const customCursor = document.querySelector('.cursor');

  container.addEventListener('mouseenter', (e) => {
    lens.style.opacity = '1';
    lens.style.transform = 'scale(1)';
    if (customCursor) {
      customCursor.style.opacity = '0';
    }
    updateMagnifier(e);
  });

  container.addEventListener('mousemove', updateMagnifier);

  container.addEventListener('mouseleave', () => {
    lens.style.opacity = '0';
    lens.style.transform = 'scale(0.8)';
    if (customCursor) {
      customCursor.style.opacity = '1';
    }
  });
};

// Next.js strategy afterInteractive handles: readyState check handles SSR dynamic insertion!
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAboutMagnifier);
} else {
  initAboutMagnifier();
}
