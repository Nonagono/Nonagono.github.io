// Interactive Scene: Connect 4
// Chase Buniak
// Oct 1, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GAME_BOARD_WIDTH = 900;
const GAME_BOARD_HEIGHT = 880;
const CIRCLE_RADIUS = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  gameBoard();
}

function gameBoard() {
  fill("blue");
  for (let x = 0; x < GAME_BOARD_WIDTH; x += GAME_BOARD_WIDTH/7) {
    // fill(random(255), random(255), random(255));
    rect(0, 0, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT)/7;
  }
  holes();
}

function holes() {
  for (let x = 90; x < GAME_BOARD_WIDTH; x += 120) {
    for (let y = 90; y <  GAME_BOARD_HEIGHT; y+= 120) {
      fill("white");
      circle(x, y, CIRCLE_RADIUS * 2);
    }
  }
}