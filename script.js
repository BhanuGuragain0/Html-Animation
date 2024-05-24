const emojis = ['😊', '😂', '😢', '😜', '😄', '😎', '🤩', '😇', '😍', '😋'];
const emojisContainer = document.getElementById('emojis-container');

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
}

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const { x, y } = getRandomPosition();
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    emojisContainer.appendChild(emoji);

    setTimeout(() => {
        emojisContainer.removeChild(emoji);
    }, 3000);
}

function randomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function generateEmojis() {
    createEmoji();
    setTimeout(generateEmojis, randomInterval(1000, 5000));
}

generateEmojis();
