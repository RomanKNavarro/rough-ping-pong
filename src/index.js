import Game from "/src/game";

let canvas = document.getElementById("gameScreen");
let cxt = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT); // REMEMBER: add "new", otherwise the class is treated as a func and error returns!
game.start(); // game object is instantiated and "start()" draws paddle/ball onscreen

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  cxt.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(cxt); // all the paddle and ball junk is moved into these "Game" class methods

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
