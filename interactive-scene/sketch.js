// Interactive Scene: Connect 4
// Chase Buniak
// Oct 1, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const GAME_BOARD_WIDTH = 900;
const GAME_BOARD_HEIGHT = 880;
const CIRCLE_RADIUS = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  gameBaord();
}

function gameBaord() {
  fill("blue");
  rect(0, 0, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT);
}

function holes() {
  for (let x = CIRCLE_RADIUS; x <= GAME_BOARD_WIDTH - CIRCLE_RADIUS; x++) {
    for (let y = CIRCLE_RADIUS; x <= GAME_BOARD_HEIGHT - CIRCLE_RADIUS; y++) {
      //placeholder
    }
  }
}