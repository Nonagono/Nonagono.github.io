// Interactive Scene: Connect 4
// Chase Buniak
// Oct 1, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GAME_BOARD_WIDTH = 900;
const GAME_BOARD_HEIGHT = 880;
const CIRCLE_RADIUS = 40;
let arrow1 = 90;
let arrow2 = 120;
let arrow3 = 150;
let checkPixel;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  gameBoard();
}

function gameBoard() {
  fill("blue");
  rect(0, 0, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT);
  holes();
}

function holes() {
  for (let y = 90; y <  GAME_BOARD_HEIGHT; y+= 120) {
    for (let x = 90; x < GAME_BOARD_WIDTH; x += 120) {
      fill("white");
      circle(x, y, CIRCLE_RADIUS * 2);
    }
  }
}

function placementArrow() {
  triangle(arrow1, 30, arrow2, 60, arrow3, 30);
}


// function chips() {
//   if (keyIsPressed(32)) {
//     checkPixel()
//   }
// }

function mouseWheel(event) {
  if (event.delta < 0) {
    arrow1 += 120;
    arrow2 += 120;
    arrow3 += 120;
  }
  else if (event.delta > 0) {
    arrow1 -= 120;
    arrow2 -= 120;
    arrow3 -= 120;
  }
}