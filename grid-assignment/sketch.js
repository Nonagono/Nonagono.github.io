// Grid Based Game
// Chase Buniak
// November 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let cellSize;
const GRID_SIZE = 8;
let tileIsLight = true;
const LIGHT_TILE = 0;
const DARK_TILE = 1;
let playerPiece = 2;
let botPiece = 3;
let selected = 0;
    
function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateBoard(GRID_SIZE, GRID_SIZE);
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
  displayGrid();
}
    
function mousePressed() {
  let clickX = Math.floor(mouseX/cellSize);
  let clickY = Math.floor(mouseY/cellSize);
    
  for (let piece of grid) {
    if (grid[clickY][clickX] === playerPiece) {
      piece.pieceStroke = 255;
    }
    else {
      piece.pieceStroke = 0;
    }
  }
}

    
function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      stroke(0);
      if (grid[y][x] === DARK_TILE) {
        makeSquares(x, y);
      }
      else if (grid[y][x] === LIGHT_TILE) {
        makeSquares(x, y);
      }
      else if (grid[y][x] === playerPiece) {
        makeSquares(x, y);
        fill(20, 20, 20);
        makePieces(x, y);
      }
      else if (grid[y][x] === botPiece) {
        makeSquares(x, y);
        fill(200, 200, 200);
        makePieces(x, y);
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
    
function makePieces(x, y) {
  let pieceGoalFinder;
  if (y > 4) {
    pieceGoalFinder = 8;
  }
  else if (y < 3) {
    pieceGoalFinder = 0;
  }
  let basicPiece = {
    pieceX: x * cellSize + cellSize/2,
    pieceY: y * cellSize + cellSize/2,
    pieceD: cellSize/1.5,
    pieceGoal: GRID_SIZE - pieceGoalFinder,
  };
    
  grid.push(basicPiece);
  circle(basicPiece.pieceX, basicPiece.pieceY, basicPiece.pieceD);
}
    
function generateBoard(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    tileIsLight = !tileIsLight;
    for (let x = 0; x < cols; x++) {
      if (tileIsLight && y > 4) {
        newGrid[y].push(playerPiece);
      }
      else if (tileIsLight && y < 3) {
        newGrid[y].push(botPiece);
      }
      else if (tileIsLight) {
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
    
    
// Create a way to know what piece is selected
// Make sure when piece is moved tile stays same colour; Likely white
// Make a way for piece to mave
// Make a way to capture
// Create smart Ai (Make a func to check for possible capture)ieceY, basicPiece.pieceD);
