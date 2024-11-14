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
  let clickX = Math.floor(mouseX / cellSize);
  let clickY = Math.floor(mouseY /cellSize);

  if (playerTurn === true) {
    // Select Piece
    if (pieces[clickY][clickX] === PLAYER_PIECE) {
      pieces[clickY][clickX] = SELECTED;
      oldPosition = [clickY, clickX];
      availableMoves(clickX, clickY);
    }
    // Deselect Piece
    else if (pieces[clickY][clickX] === SELECTED && clickY - 1 >= 0) {
      pieces[clickY][clickX] = PLAYER_PIECE;
      board[clickY - 1][clickX + 1] = LIGHT_TILE;
      board[clickY - 1][clickX - 1] = LIGHT_TILE;
      if (clickY - 2 > 0) {
        board[clickY - 2][clickX + 2] = LIGHT_TILE;
        board[clickY - 2][clickX - 2] = LIGHT_TILE;
      }
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
      board[pieceY-2][pieceX-2] = 2;
    }
    if (pieces[pieceY - 1][pieceX + 1] === BOT_PIECE && pieces[pieceY - 2][pieceX + 2] === 0) {
      board[pieceY - 2][pieceX + 2] = 2;
    }
  }
}


// Make sure when piece is moved tile stays same colour; Likely white
// Make a way for piece to move
// Make a way to capture
// Create smart Ai (Make a func to check for possible capture)ieceY, basicPiece.pieceD);
