const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Car properties
const carWidth = 30;
const carHeight = 50;
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight - 20;
const carSpeed = 5;

// Track properties
const trackColor = '#008000';
const trackBorderColor = '#FFFF00';

// Function to draw the car
function drawCar() {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(carX, carY, carWidth, carHeight);
}

// Function to draw the track
function drawTrack() {
    ctx.fillStyle = trackColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = trackBorderColor;
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

// Game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the track
    drawTrack();

    // Draw the car
    drawCar();

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Event listeners for car movement
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        carX = Math.max(0, carX - carSpeed);
    } else if (event.key === 'ArrowRight') {
        carX = Math.min(canvas.width - carWidth, carX + carSpeed);
    }
});
