// Snowfall Effect
const snowContainer = document.querySelector('.snow-container');
const snowflakeCount = 50;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);
}

// Santa Animation
const santaContainer = document.querySelector('.santa-container');
const santaCount = 3; // Number of Santas

for (let i = 0; i < santaCount; i++) {
    const santa = document.createElement('img');
    santa.className = 'santa';
    santa.src = 'santa.png'; // Path to Santa image
    santa.style.left = Math.random() * 100 + 'vw'; // Random horizontal start position
    santa.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random speed
    santaContainer.appendChild(santa);
}

