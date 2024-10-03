// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let ball of ballArray) {
    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce
    if (ball.x > width - ball.r|| ball.x < 0 + ball.r) {
      ball.dx *= -1;
    }
    if (ball.y > height - ball.r|| ball.y < 0 + ball.r) {
      ball.dy *= -1;
    }

    // Show ball
    noStroke();
    fill(ball.red, ball.green, ball.blue);
    circle(ball.x, ball.y, ball.r * 2);
  }
}

function mousePressed() {
  spawner(mouseX, mouseY);
}

function spawner(theX,theY) {
  let ball = {
    x: theX,
    y: theY,
    r: random(3, 6),
    dx: random(-50, 50),
    dy: random(-50, 50),
    red: random(255),
    green: random(255),
    blue: random(225),
  };

  ballArray.push(ball);
}