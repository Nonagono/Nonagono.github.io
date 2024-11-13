// Grid Based Game
// Chase Buniak
// November 15, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// 


// Constants and Variables used.
let pieces;
let board;
let cellSize;
const GRID_SIZE = 8;
let tileIsLight = true;
let shouldBePiece = true;
const LIGHT_TILE = 0;
const DARK_TILE = 1;
const EMPTY = 0;
let playerPiece = 2;
let botPiece = 3;
let playerTurn = true;

// Creates the arrays and sets the cell size on start up.
function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  board = generateBoard(GRID_SIZE, GRID_SIZE);
  pieces = generatePieces(GRID_SIZE, GRID_SIZE);
}
 
// Changes the size of the board depending on window size.
function windowResized() {
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
}

function draw() {
  background(220);
  displayBoard();
  displayPieces();
}

// Runs through a nested loop to create and fill the array for the board.
function generateBoard(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    tileIsLight = !tileIsLight;
    for (let x = 0; x < cols; x++) {
      if (tileIsLight) {
        newGrid[y].push(LIGHT_TILE);
      }
      else {
        newGrid[y].push(DARK_TILE);
      }
      tileIsLight = !tileIsLight;
    }
  }
  return newGrid;
}

// Uses a nested loop and the make squares function to display the checker board.
function displayBoard() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      makeSquares(x, y);
    }
  }
}

// Checks the value of the elements of the board array to change the fill color, then makes the squares.
function makeSquares(x, y) {
  if (board[y][x] === DARK_TILE) {
    fill(85, 52, 43);
  }
  else {
    fill(216, 181, 137);
  }
  square(x * cellSize, y * cellSize, cellSize);
}

// Uses a nested loop to create and fill the array for the pieces.
function generatePieces(cols, rows) {
  let newArray = [];
  for (let y = 0; y < rows; y++) {
    newArray.push([]);
    shouldBePiece = !shouldBePiece;
    for (let x = 0; x < cols; x++) {
      if (shouldBePiece && y > 4) {
        newArray[y].push(playerPiece);
      }
      else if (shouldBePiece && y < 3) {
        newArray[y].push(botPiece);
      }
      else {
        newArray[y].push(EMPTY);
      }
      shouldBePiece = !shouldBePiece;
    }
  }
  return newArray;
}

// Uses a nested loop to create and dispay  the pieces.
function displayPieces() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      stroke(0);
      if (pieces[y][x] === playerPiece) {
        fill(20, 20, 20);
        makePieces(x, y);
      }
      else if (pieces[y][x] === botPiece) {
        fill(200, 200, 200);
        makePieces(x, y);
      }
    }
  }
}

// comment
// function makePieces(x, y) {
//   let pieceGoalFinder;
//   if (y > 4) {
//     pieceGoalFinder = 8;
//   }
//   else if (y < 3) {
//     pieceGoalFinder = 0;
//   }
//   let basicPiece = {
//     pieceX: x,
//     pieceY: y,
//     pieceD: cellSize/1.5,
//     pieceGoal: GRID_SIZE - pieceGoalFinder,
//   };
    
//   pieces.push(basicPiece);
//   circle(basicPiece.pieceX * cellSize + cellSize/2, basicPiece.pieceY * cellSize + cellSize/2 , basicPiece.pieceD);
// }
    
// function mousePressed() {
//   let clickX = Math.floor(mouseX/cellSize);
//   let clickY = Math.floor(mouseY/cellSize);


//   console.log(clickX);
//   console.log(clickY);
//   if (pieces[clickY][clickX] === playerPiece) {
//     displayMoves(clickX, clickY);
//   }
// }

// function displayMoves(x, y) {
//   for (let piece of pieces) {
//     if (pieces.pieceX === x && pieces.pieceY === y) {
//       console.log(pieces.pieceX);
//       console.log("hi");
//       return pieces.pieceX += 1;
//     }
//   }
// }






// Display pieces
// Create a way to know what piece is selected
// Make sure when piece is moved tile stays same colour; Likely white
// Make a way for piece to mave
// Make a way to capture
// Create smart Ai (Make a func to check for possible capture)ieceY, basicPiece.pieceD);
