export default class InputHandler2 {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 65: // A key
          paddle.moveLeft();
          break;

        case 68: // D key
          paddle.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 65:
          if (paddle.speed < 0) paddle.stop();
          break;

        case 68:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
