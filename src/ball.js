import { detectCollision } from "./collisionDetect";
const canvas = document.getElementById("gameScreen");
const cxt = canvas.getContext("2d");

export default class Ball {
  constructor(game, xPos, yPos) {
    // 100, 100
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game; // NEW

    this.position = { x: xPos, y: yPos };
    this.speed = { x: 5, y: 3 };
    //this.size = 50;
    this.width = 45;
    this.height = 50;

    this.scores = { p1: 0, p2: 0 };
  }

  draw(cxt) {
    cxt.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x + this.width > this.gameWidth) {
      // right wall, point for p2 (left) if hit
      this.speed.x = -this.speed.x;
      this.scores.p1 += 1;
    }

    if (this.position.x <= 0) {
      // left wall, point for p1 (right) if hit
      this.speed.x = -this.speed.x;
      this.scores.p2 += 1;
    }

    if (
      this.position.y + this.height > this.gameHeight ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }

    if (detectCollision(this, this.game.paddle, this.game.paddle2)) {
      // HERE'S WHERE DETECTCOLLISION IS USED
      this.speed.x = -this.speed.x;
    }
  }
}
