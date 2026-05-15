const canvas = document.getElementById('codeRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(0).map(() => Math.random() * canvas.height);

const chars = ['P', 'O', 'L', 'A', 'N', 'D', '', ''];

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${fontSize}px 'Fira Code', monospace`;

  const halfHeight = canvas.height / 2;

  for (let i = 0; i < columns; i++) {
    const x = i * fontSize;
    const y = drops[i];

    let color;
    if (y < halfHeight) {
      color = '#FFFFFF'; // White top
    } else {
      color = '#DC143C'; // Red bottom (Crimson)
    }

    ctx.fillStyle = color;

    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, x, y);

    drops[i] += fontSize;

    if (drops[i] > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
