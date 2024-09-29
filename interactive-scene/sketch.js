// Interactive Scene: Connect 4
// Chase Buniak
// Oct 1, 2024
//
// Extra for Experts:
// - Used an array for circle positions, used the scroll wheel function to have a triangle move around.


// Constants and variables used
const GAME_BOARD_WIDTH = 900;
const GAME_BOARD_HEIGHT = 880;
const CIRCLE_RADIUS = 40;
const CIRCLE_DEVIATION = 120;
const BOARD_OFFSET = 90;
let arrowX1 = 60;
let arrowX2 = 90;
let arrowX3 = 120;
let checkPixel;
let columnPosition = 0;
let rowPosition = 0;
let boardArray = [[0,0,0,0,0,0,0], 
                  [0,0,0,0,0,0,0], 
                  [0,0,0,0,0,0,0], 
                  [0,0,0,0,0,0,0], 
                  [0,0,0,0,0,0,0], 
                  [0,0,0,0,0,0,0]]
let playerTurn = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  gameBoard();
  chips();
}

//Creates the background for the game board
function gameBoard() {
  fill("blue");
  rect(0, 0, GAME_BOARD_WIDTH, GAME_BOARD_HEIGHT);
  holes();
  placementArrow();
}

//Creates all of the circles in the board; coloured white.
function holes() {
  for (let x = BOARD_OFFSET; x < GAME_BOARD_WIDTH; x += CIRCLE_DEVIATION) {
    for (let y = BOARD_OFFSET; y < GAME_BOARD_HEIGHT; y+= CIRCLE_DEVIATION) {
      fill("white");
      circle(x, y, CIRCLE_RADIUS * 2);
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
    }
  }
  else if (event.delta > 0) {
    if (arrowX1 > CIRCLE_DEVIATION) {
      arrowX1 -= CIRCLE_DEVIATION;
      arrowX2 -= CIRCLE_DEVIATION;
      arrowX3 -= CIRCLE_DEVIATION;
    }
  }
}

// Creates a coloured circle based on whose turn it is, checking to see where to put it using an array, then changes the player turn state to allow the next player to place a chip.
function chips() {
  if (keyIsPressed) {
    if (keyCode === 32){
      if (playerTurn === 1) {
        columnPosition = ((arrowX2 - BOARD_OFFSET)/120) - 1;
        for (let i = 0; i < 6; i++) {
          if (boardArray[columnPosition][i] === 0) {
            rowPosition = i;
          }
        }
        fill("red");
        circle((columnPosition + 1) * 120 + BOARD_OFFSET, (rowPosition + 1) * 120 + BOARD_OFFSET, CIRCLE_RADIUS * 2);
        boardArray[columnPosition][rowPosition] = 1;
        playerTurn = 2;
      }
      if (playerTurn === 2) {
        columnPosition = ((arrowX2 - BOARD_OFFSET)/120) - 1;
        for (let i = 0; i < 6; i++) {
          if (boardArray[columnPosition][i] === 0) {
            rowPosition = i;
          }
        }
        fill("yellow");
        circle((columnPosition + 1) * 120 + BOARD_OFFSET, (rowPosition + 1) * 120 + BOARD_OFFSET, CIRCLE_RADIUS * 2);
        boardArray[columnPosition][rowPosition] = 2;
        playerTurn = 1;
      }
    }
  }
}
