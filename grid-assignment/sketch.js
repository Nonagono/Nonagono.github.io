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
const PLAYER_PIECE = 2;
const BOT_PIECE = 3;
const SELECTED = 4;
let playerTurn = true;
let oldPosition;
let pieceIsSelected = false;

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
  else if (board[y][x] === LIGHT_TILE) {
    fill(216, 181, 137);
  }
  else {
    fill("pink");
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
        newArray[y].push(PLAYER_PIECE);
      }
      else if (shouldBePiece && y < 3) {
        newArray[y].push(BOT_PIECE);
      }
      else {
        newArray[y].push(EMPTY);
      }
      shouldBePiece = !shouldBePiece;
    }
  }
  return newArray;
}

// Uses a nested loop to create and display the pieces.
function displayPieces() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      noStroke();
      if (pieces[y][x] === PLAYER_PIECE) {
        fill("blue");
      }
      else if (pieces[y][x] === 0) {
        noFill();
      }
      else if (pieces[y][x] === BOT_PIECE) {
        fill("red");
      }
      else if (pieces[y][x] === SELECTED) {
        fill("pink");
      }
      circle(x * cellSize + cellSize/2, y * cellSize + cellSize/2 , cellSize);
    }
  }
}


// Shows available moves when mouse is clicked on a player piece and it is the player's turn.
function mousePressed() {
  let pressX = Math.floor(mouseX / cellSize);
  let pressY = Math.floor(mouseY /cellSize);

  if (playerTurn === true) {
    // Select Piece
    if (pieces[pressY][pressX] === PLAYER_PIECE && !pieceIsSelected) {
      pieces[pressY][pressX] = SELECTED;
      oldPosition = [pressY, pressX];
      availableMoves(pressX, pressY);
      pieceIsSelected = !pieceIsSelected;
    }
    // Deselect Piece
    else if (pieces[pressY][pressX] === SELECTED && pressY - 1 >= 0) {
      pieces[pressY][pressX] = PLAYER_PIECE;
      board[pressY - 1][pressX + 1] = LIGHT_TILE;
      board[pressY - 1][pressX - 1] = LIGHT_TILE;
      if (pressY - 2 > 0) {
        board[pressY - 2][pressX + 2] = LIGHT_TILE;
        board[pressY - 2][pressX - 2] = LIGHT_TILE;
      }
      pieceIsSelected = !pieceIsSelected;
    }
  }
}

// Shows the available moves and jumps
function availableMoves(x, y) {
  let pieceX = x;
  let pieceY = y;

  // Shows available moves
  if (pieceY - 1 >= 0) {
    if (pieces[pieceY - 1][pieceX + 1 ] === EMPTY) {
      board[y - 1][x + 1] = SELECTED;
    }
    if (pieces[pieceY - 1][pieceX - 1] === EMPTY) {
      board[pieceY - 1][pieceX - 1] = SELECTED;
    }
  }
  // Shows available jumps
  if (pieceY - 2 >= 0) {
    if (pieces[pieceY - 1][pieceX - 1] === BOT_PIECE && pieces[pieceY - 2][pieceX - 2] === 0) {
      board[pieceY-2][pieceX-2] = SELECTED;
    }
    if (pieces[pieceY - 1][pieceX + 1] === BOT_PIECE && pieces[pieceY - 2][pieceX + 2] === 0) {
      board[pieceY - 2][pieceX + 2] = SELECTED;
    }
  }
}

// 
function mouseClicked() {
  let clickX = Math.floor(mouseX / cellSize);
  let clickY = Math.floor(mouseY / cellSize);

  // Regular moves
  if (board[clickY][clickX] === SELECTED) {
    pieces[clickY][clickX] = PLAYER_PIECE;
    board[oldPosition[0] - 1][oldPosition[1] + 1] = LIGHT_TILE;
    board[oldPosition[0] - 1][oldPosition[1] - 1] = LIGHT_TILE;
    // Jumps
    if (oldPosition[0] - 2 < 0 || oldPosition[1] < 0) {
      board[oldPosition[0] - 1][oldPosition[1] + 1] = LIGHT_TILE;
      board[oldPosition[0] - 1][oldPosition[1] - 1] = LIGHT_TILE;
    }

    // Check for boundaries for regular move
    else {
      board[oldPosition[0] - 2][oldPosition[1] + 2] = LIGHT_TILE;
      board[oldPosition[0] - 2][oldPosition[1] - 2] = LIGHT_TILE;
    }
    pieces[oldPosition[0]][oldPosition[1]] = EMPTY;

    // Check boundaries for jump
    if (clickY + 2 === oldPosition[0] && clickX + 2 === oldPosition[1]) {
      pieces[clickY + 1][clickX + 1] = 0;
    }
    else if (clickY + 2 === oldPosition[0] && clickX - 2 === oldPosition[1]) {
      pieces[clickY + 1][clickX - 1] = 0;
    }
    pieceIsSelected = !pieceIsSelected;
  }
}

// Make a way to capture
// Create smart Ai (Make a func to check for possible capture)
