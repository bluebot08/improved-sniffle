// Initialize the canvas and context
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Define the player object
const player = {
  x: canvas.width / 2 - 16,
  y: canvas.height - 48,
  width: 32,
  height: 32,
  speed: 5,
  sprite: new Image(),
  spriteSrc: "player.png",
};

// Define the game loop
function gameLoop() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  context.drawImage(
    player.sprite,
    player.x,
    player.y,
    player.width,
    player.height
  );

  // Move the player
  if (isKeyPressed("ArrowUp")) {
    player.y -= player.speed;
  } else if (isKeyPressed("ArrowDown")) {
    player.y += player.speed;
  } else if (isKeyPressed("ArrowLeft")) {
    player.x -= player.speed;
  } else if (isKeyPressed("ArrowRight")) {
    player.x += player.speed;
  }

  // Clamp the player within the canvas bounds
  if (player.x < 0) {
    player.x = 0;
  } else if (player.x > canvas.width - player.width) {
    player.x = canvas.width - player.width;
  }
  if (player.y < 0) {
    player.y = 0;
  } else if (player.y > canvas.height - player.height) {
    player.y = canvas.height - player.height;
  }

  // Request another animation frame
  window.requestAnimationFrame(gameLoop);
}

// Initialize the game
function init() {
  // Load the player sprite
  player.sprite.src = player.spriteSrc;

  // Start the game loop
  gameLoop();
}

// Handle key events
const keys = {};
function isKeyPressed(key) {
  return keys[key];
}
document.addEventListener("keydown", function (event) {
  keys[event.code] = true;
});
document.addEventListener("keyup", function (event) {
  keys[event.code] = false;
});

// Start the game
init();
