/* eslint-disable indent */
// Grid Demo
// Oct 22, 2024

let grid;
let cellSize;
const GRID_SIZE = 20;
toggleNeighbours = false;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
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

function keyPressed() {
  if (key === 'r') {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === 'e') {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === 'n') {
    toggleNeighbours = !toggleNeighbours;
  }
  if (key === ' ') {
    grid = updateGrid();
  }
}

function updateGrid() {
  let nextTurn = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  for (let y = 0; y < GRID_SIZE; y++) {
    for ( let x = 0; x < GRID_SIZE; x++) {
      let neighbours = 0;
      
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (x+j >= 0 && x+j < GRID_SIZE && y+i >= 0 && y+i < GRID_SIZE) {
            neighbours += grid[y+i][x+j];
          }
        }
      }
      neighbours -= grid[y][x];

      if (grid[y][x] === 1) {
        if (neighbours === 2 || neighbours === 3) {
          nextTurny[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) {
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else if 
      }
    }
  }
}

function mousePressed() {
  let xValue = floor(mouseX/cellSize);
  let yValue = floor(mouseY/cellSize);

  toggleCell(xValue, yValue);

  if (toggleNeighbours) {
    toggleCell(xValue - 1, yValue);
    toggleCell(xValue + 1, yValue);
    toggleCell(xValue, yValue - 1);
    toggleCell(xValue, yValue + 1);
  }
}

function toggleCell(x, y) {
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else {
      grid[y][x] = 0;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 1) {
        fill('black');
      }
      else if (grid[y][x] === 0) {
        fill('white');
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid (cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}