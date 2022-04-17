import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import InputHandler2 from "./input2";
import Ball from "/src/ball";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

// This class is useful so that "index.js" isn't so cluttered, especially with the same variables like "gameHeight" and "gameWidth"
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    // this method creates the paddle and ball and draws them on-screen

    this.ball = new Ball(this, 100, 100);
    this.paddle = new Paddle(this, this.gameWidth * 0.95, this.gameHeight / 2);
    this.paddle2 = new Paddle(
      this,
      this.gameWidth * 0.015,
      this.gameHeight / 2
    );

    this.gameObjects = [this.ball, this.paddle, this.paddle2]; // so that "update()" isnt called so much VVV

    new InputHandler(this.paddle);
    new InputHandler2(this.paddle2);
  }

  update(deltaTime) {
    this.gameObjects.forEach((object) => object.update(deltaTime)); // Single call to "update()"
  }

  draw(cxt) {
    this.gameObjects.forEach((object) => object.draw(cxt)); // same here

    //  LEFT
    cxt.font = "30px Ariel";
    cxt.fillStyle = "purple";
    cxt.textAlign = "center";
    cxt.fillText(
      `Player One: ${this.ball.scores.p1}`,
      this.gameWidth * 0.1,
      this.gameHeight * 0.9
    );

    // RIGHT
    cxt.font = "30px Ariel";
    cxt.fillStyle = "purple";
    cxt.textAlign = "center";
    cxt.fillText(
      `Player Two: ${this.ball.scores.p2}`,
      this.gameWidth * 0.8,
      this.gameHeight * 0.9
    );

    /*  TODO
    if (this.gamestate === GAMESTATE.MENU) {
      cxt.rect(0, 0, this.gameWidth, this.gameHeight);
      cxt.fillStyle = "rgba(0, 0, 0, 0)";
      cxt.fill();

      // TODO: DRAW FACE
      this.ball.draw(cxt);

      let image = this.brick.image;
      let x = this.brick.x;
      let y = this.brick.y;
      let width = this.brick.menuWidth;
      let height = this.brick.menuHeight;
      cxt.drawImage(image, x, y, width, height);

      cxt.font = "30px Ariel";
      cxt.fillStyle = "purple";
      cxt.textAlign = "center";
      cxt.fillText(
        "CRACKHEAD CLEANUP SIMULATOR",
        this.gameWidth / 2,
        this.gameHeight / 2
      );

      cxt.fillText(
        "press Space to start",
        this.gameWidth / 2,
        this.gameHeight / 1.3 // ADDED MORE TEXT TO MENU
      );
    } */
  }
}
