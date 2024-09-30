// Interactive Scene: Connect 4
// Chase Buniak
// Oct 1, 2024
//
// Extra for Experts:
// - Used an array/matrix for circle positions, used the scroll wheel function to have a triangle move around.


// Constants and variables used
const GAME_BOARD_WIDTH = 900;
const GAME_BOARD_HEIGHT = 880;
const CIRCLE_RADIUS = 40;
const CIRCLE_DEVIATION = 120;
const BOARD_OFFSET = 90;
let arrowX1 = 60;
let arrowX2 = 90;
let arrowX3 = 120;
let columnPosition = 0;
let rows = 6;
let columns = 7;
//let boardArray = Array(6).fill().map(() => Array(7).fill(1));
let boardArray = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
let playerTurn = 1;
let i = 5;
let arrayValue;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  gameBoard();
  colourCircles();
}

//Creates the background for the game board and runs the holes and placementArrow functions.
function gameBoard() {
  fill("blue");
  rect(0, 0, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT);
  holes();
  placementArrow();
}

//Creates all of the circles in the board; coloured white until the state of a number in the array changes. If the number is 1 then the circle will be red if the number is 2 then the circle will be yellow.
function holes() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      fill("white");
      if (boardArray[r][c] === 2) {
        fill("red");
      }
      if (boardArray[r][c] === 3) {
        fill("yellow");
      }
    circle(c * CIRCLE_DEVIATION + BOARD_OFFSET, r * CIRCLE_DEVIATION + BOARD_OFFSET, CIRCLE_RADIUS * 2);
    }
  }
}

// Creates a triangle to show which column your chip will be placed in.
function placementArrow() {
  triangle(arrowX1, 20, arrowX2, 50, arrowX3, 20);
}

//Moves the position of placement arrow using the scroll wheel. Scrolling towards yourself makes it go left, scrolling away from yourself makes it go right.
function mouseWheel(event) {
  if (event.delta < 0) {
    if (arrowX3 < GAME_BOARD_WIDTH - CIRCLE_DEVIATION) {
      arrowX1 += CIRCLE_DEVIATION;
      arrowX2 += CIRCLE_DEVIATION;
      arrowX3 += CIRCLE_DEVIATION;
      columnPosition += 1;
    }
  }
  else if (event.delta > 0) {
    if (arrowX1 > CIRCLE_DEVIATION) {
      arrowX1 -= CIRCLE_DEVIATION;
      arrowX2 -= CIRCLE_DEVIATION;
      arrowX3 -= CIRCLE_DEVIATION;
      columnPosition -= 1;
    }
  }
}

// When the space bar is pressed, changes the colour of the lowest circle it can
function colourCircles() {
  if (keyIsDown(32)) {
    if (playerTurn === 1) {
      while(playerTurn === 1) {
        arrayValue = boardArray[i][columnPosition];
        console.log(arrayValue);
        if (arrayValue === 0) {
          boardArray[i][columnPosition] = 2;
          for (let timer = 0; timer < 100000; timer++) {
            console.log(timer);
          }
          i = 5;
          playerTurn = 2;
        }
        else if(i > 0){
          i -= 1;
        }
      }
    }
    if (playerTurn === 2) {
      while(playerTurn === 2) {
        arrayValue = boardArray[i][columnPosition];
        console.log(arrayValue);
        if (arrayValue === 0) {
          boardArray[i][columnPosition] = 3;
          for (let timer = 0; timer < 100000; timer++) {
            console.log(timer);
          }
          i = 5;
          playerTurn = 1;
        }
        else if(i > 0){
          i -= 1;
        }
      }
    }
  }
}