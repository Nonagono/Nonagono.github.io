/* eslint-disable indent */
// Grid Demo
// Oct 22, 2024

let grid;
let cellSize;
const GRID_SIZE = 20;

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
}
function mousePressed() {
  let xValue = round(mouseX/cellSize);
  let yValue = round(mouseY/cellSize);
  if (grid[yValue][xValue] === 1) {
    grid[yValue][xValue] = 0;
  }
  else {
    grid[yValue][xValue] = 1;
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