const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.width * ASPECT_RATIO.width;
canvas.height = DISPLAY_PIXEL.height * ASPECT_RATIO.height;

const playerProperty = {
  width: 50,
  height: 50,
  speed: 5,
  color: "tomato",
  position: {
    x: 0,
    y: 0,
  },
};

const enemyProperty = {
  width: 100,
  height: 100,
  speed: 1,
  color: "black",
  position: {
    x: canvas.width - 50,
    y: canvas.height - 50,
  },
};

const ground = new Ground("/src/assets/bg.jpg", canvas.width, canvas.height);
const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);

function animate() {
  ground.create();
  player.create();
  enemy.create();

  player.update();

  window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (callback) {
  switch (callback.key) {
    case "ArrowUp":
      player.jump();
      break;
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
    default:
      break;
  }
});

animate();
