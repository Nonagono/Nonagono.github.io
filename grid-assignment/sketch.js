// Grid Based Game
// Chase Buniak
// November 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let pieces;
let cellSize;
const GRID_SIZE = 8;
let tileIsLight = true;
let shouldBePiece = true;
const LIGHT_TILE = 0;
const DARK_TILE = 1;
let playerPiece = 2;
let botPiece = 3;
let selected = 0;
let selectedY;
let selectedX;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateBoardArray(GRID_SIZE, GRID_SIZE);
  pieces = generatePiecesArray(GRID_SIZE, GRID_SIZE);
}

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
}

function mousePressed() {
  let clickX = Math.floor(mouseX/cellSize);
  let clickY = Math.floor(mouseY/cellSize);

  for (let piece of grid) {
    if (grid[clickY][clickX] === playerPiece) {
      selectedY = clickY;
      selectedX = clickX;
    }
  }
}


function displayBoard() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      stroke(0);
      if (grid[y][x] === DARK_TILE) {
        makeSquares(x, y);
      }
      else if (grid[y][x] === LIGHT_TILE) {
        makeSquares(x, y);
      }
    }
  }
}

function makeSquares(x, y) {
  if (grid[y][x] === DARK_TILE) {
    fill(85, 52, 43);
  }
  else {
    fill(216, 181, 137);
  }
  square(x * cellSize, y * cellSize, cellSize);
}

// function displayPieces() {
//   for (let y = 0; y < GRID_SIZE; y++) {
//     for (let x = 0; x < GRID_SIZE; x++) {
//       if () {
//         circle(basicPiece.pieceX, basicPiece.pieceY, basicPiece.pieceD);
//       }
//     }
//   }
// }

function makePieces(x, y) {
  let pieceGoalFinder;
  let colorPlaceholder;
  if (y > 4) {
    pieceGoalFinder = 8;
    colorPlaceholder = 'blue';
  }
  else if (y < 3) {
    pieceGoalFinder = 0;
    colorPlaceholder = 'red';
  }
  let basicPiece = {
    pieceX: x * cellSize + cellSize/2,
    pieceY: y * cellSize + cellSize/2,
    pieceD: cellSize/1.5,
    pieceGoal: GRID_SIZE - pieceGoalFinder,
    isKing: false,
    colour: colorPlaceholder,
  };

  grid.push(basicPiece);
}

function generateBoardArray(cols, rows) {
  let newBoardGrid = [];
  for (let y = 0; y < rows; y++) {
    newBoardGrid.push([]);
    tileIsLight = !tileIsLight;
    for (let x = 0; x < cols; x++) {
      if (tileIsLight) {
        newBoardGrid[y].push(LIGHT_TILE);
      }
      else {
        newBoardGrid[y].push(DARK_TILE);
      }
      tileIsLight = !tileIsLight;
    }
  }
  return newBoardGrid;
}

function generatePiecesArray(cols, rows) {
  let newPieceGrid = [];
  for (let y = 0; y < rows; y++) {
    newPieceGrid.push([]);
    shouldBePiece = !shouldBePiece;
    for (let x = 0; x < cols; x++) {
      if (shouldBePiece && y < 3) {
        newPieceGrid[y].push(botPiece);
      }
      else if (shouldBePiece && y > 4) {
        newPieceGrid[y].push(playerPiece);
      }
    }
  }
}

// Create a way to know what piece is selected
// Make sure when piece is moved tile stays same colour; Likely white
// Make a way for piece to mave
// Make a way to capture
// Create smart Ai (Make a func to check for possible capture)