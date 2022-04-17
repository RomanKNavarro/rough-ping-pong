export default class Paddle {
  constructor(game, xPos, yPos) {
    this.gameHeight = game.gameHeight;
    this.width = 30;
    this.height = 150;

    this.maxSpeed = 10;
    this.speed = 0; // current speed at which paddle moves

    this.position = {
      // POSITION OF THE PADDLE
      x: xPos,
      y: yPos - this.height / 2 // CENTERS PADDLES
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(cxt) {
    cxt.fillStyle = "#0ff"; // FOLLOWS RGB FORMAT
    cxt.fillRect(this.position.x, this.position.y, this.width, this.height); // Draws the paddle
  }

  update(deltaTime) {
    // ALLOWS PADDLE TO MOVE
    this.position.y += this.speed; // moving left makes the speed -10. when updating, that's how much "x" moves

    if (this.position.y < 0) this.position.y = 0;

    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;
  }
}
