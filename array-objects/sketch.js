// Arrays and Object Notation: Chrome T-Rex Game
// Chase Buniak
// October 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Variables and constants used
let bGC = 'black';

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bGC);
}


// Holds the variables for the object Cactus
function spawnCactus() {
  let cactus = {
    dx: 1,
    catusHeight: random(5, 10),
    catusWidth: 5,
  };
}

function changeBackgroundColour() {
  fill('white');
  rect(width - 50, 0, 50, 50);
}
