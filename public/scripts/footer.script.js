// Safe and Optimized Footer Script for Next.js

const initFooterScript = () => {
  const durationVal = getComputedStyle(document.documentElement).getPropertyValue('--fall-duration');
  const duration = durationVal ? durationVal : '10s';

  function createFallingStars() {
    const footer = document.querySelector('.footer-container');
    if (!footer) return;
    const i = document.createElement('i');
    i.style.height = `${Math.random() * 5 + 2}rem`;
    i.style.width = `0.2rem`;
    i.style.left = `${Math.random() * 150}vw`;
    i.style.background = `linear-gradient(transparent, var(--fall-color))`;
    i.style.animationDuration = `${Math.random() * parseFloat(duration) + 6}s`;
    i.style.animationDelay = `${Math.random() * 10}s`;
    i.style.opacity = `${Math.random()}`;
    footer.appendChild(i);
  }

  for (let p = 1; p < 100; p++) {
    setTimeout(() => {
      createFallingStars();
    }, 100);
  }

  // dynamic footer border start
  function updatePaths() {
    const card = document.getElementById('footer-container');
    if (!card) return;
    const svg = document.querySelector('.border-svg');
    if (!svg) return;
    const styles = getComputedStyle(card);

    // Get dimensions and radius
    const width = card.clientWidth;
    const height = card.clientHeight;
    const r = parseFloat(styles.borderRadius) || 0;

    // Set viewBox dynamically
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Right path
    const rightPath = `
      M${width / 2},${height}
      L${width - r},${height} Q${width},${height} ${width},${height - r}
      L${width},${r} Q${width},0 ${width - r},0
      L${width / 2},0
    `;

    // Left path
    const leftPath = `
      M${width / 2},${height}
      L${r},${height} Q0,${height} 0,${height - r}
      L0,${r} Q0,0 ${r},0
      L${width / 2},0
    `;

    // Apply paths
    const rPath = document.querySelector('.footer-border-path.right');
    const lPath = document.querySelector('.footer-border-path.left');
    if (rPath) rPath.setAttribute('d', rightPath);
    if (lPath) lPath.setAttribute('d', leftPath);
  }

  const card = document.getElementById('footer-container');
  if (card) {
    // Run on load and resize
    updatePaths();
    window.addEventListener('resize', updatePaths);

    const paths = document.querySelectorAll('.footer-border-path');
    // Store lengths for each path
    const pathData = Array.from(paths).map(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      return { path, length };
    });

    let progress = 0; // 0 to 1
    const increment = 0.15;
    
    // Click increases border
    card.addEventListener('click', () => {
      const threshold = 1;
      progress = Math.min(threshold, progress + increment);

      if (progress >= threshold) {
        startConfetti();
      }
      updateBorder();
    });

    // Auto decrease every second
    setInterval(() => {
      if (progress > 0) {
        progress = Math.max(0, progress - 0.05); // decrease slowly
        updateBorder();
      }
    }, 500);

    function updateBorder() {
      pathData.forEach(({ path, length }) => {
        path.style.strokeDashoffset = length * (1 - progress);
      });
    }
  }

  // Confetti starts
  const canvas = document.getElementById("confettiCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      let confetti = [];
      let W = window.innerWidth;
      let H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;

      // Confetti piece class
      class Confetto {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 8 + 4;
          this.color = randomColor();
          this.rotation = Math.random() * 360;
          this.rotationSpeed = (Math.random() - 0.5) * 10;
          this.speedX = (Math.random() - 0.5) * 3; // less horizontal spread
          this.speedY = Math.random() * -10; // slower upward burst
          this.opacity = 1;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.rotation += this.rotationSpeed;
          this.opacity -= 0.005; // slow fade
          this.speedY += 0.10; // gravity pulls them back down
        }
        draw() {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation * Math.PI / 180);
          ctx.fillStyle = this.color;
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
          ctx.restore();
        }
      }

      // Random color helper
      function randomColor() {
        const colors = ['#FF4B5C', '#FFCC29', '#4CD3C2', '#1E90FF', '#FF8C00', '#8A2BE2'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      window.startConfetti = function startConfetti() {
        for (let i = 0; i < 150; i++) {
          const burstX = Math.random() * W; // anywhere horizontally
          const burstY = H + 10; // just below the screen
          confetti.push(new Confetto(burstX, burstY));
        }
        animateConfetti();
      }

      // Animation loop
      function animateConfetti() {
        ctx.clearRect(0, 0, W, H);
        confetti.forEach((c, i) => {
          c.update();
          c.draw();
          if (c.opacity <= 0) confetti.splice(i, 1);
        });
        if (confetti.length > 0) {
          requestAnimationFrame(animateConfetti);
        }
      }

      // Optional: resize canvas if window changes
      window.addEventListener("resize", () => {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
      });
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterScript);
} else {
  initFooterScript();
}
