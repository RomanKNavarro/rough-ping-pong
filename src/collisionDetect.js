export function detectCollision(ball, gameObject, gameObject2) {
  // sig: ball, leftPaddle, rightPaddle
  let leftOfBall = ball.position.x + 20;
  //let rightOfBall = ball.position.x + ball.size - 20;
  let rightOfBall = ball.position.x + ball.width - 20;
  // LEFT PADDLE
  let leftPaddleSide = gameObject.position.x; // ENTIRE X AXIS (VERTICAL)

  let leftPaddleTop = gameObject.position.y;
  let leftPaddleBottom = gameObject.position.y + gameObject.height;

  // RIGHT PADDLE:
  let rightPaddleSide = gameObject2.position.x + gameObject2.width; // width of right paddle
  let rightPaddleTop = gameObject2.position.y;
  let rightPaddleBottom = gameObject2.position.y + gameObject2.height;
  // POSTSCRIPT: THIS REPRESENTS A SINGLE POINT (BOTTOM LEFT CORNER), NOT THE LEFT SIDE OF THE PADDLE :v)

  if (
    (rightOfBall >= leftPaddleSide &&
      ball.position.y >= leftPaddleTop &&
      ball.position.y <= leftPaddleBottom) ||
    (leftOfBall <= rightPaddleSide &&
      ball.position.y >= rightPaddleTop &&
      ball.position.y <= rightPaddleBottom)
  ) {
    return true;
  } else {
    return false;
  }

  // if (
  //   rightOfBall >= leftPaddleSide ||
  //   (leftOfBall <= rightPaddleSide &&
  //     ball.position.y >= rightPaddleTop &&
  //     ball.position.y <= rightPaddleBottom)
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// BREAKTHROUGH ACHIEVED HERE, ALBIET GLITCHY.
