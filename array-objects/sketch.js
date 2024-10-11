// Arrays and Object Notation: Chrome T-Rex Game
// Chase Buniak
// October 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Variables and constants used
let bGCState = true;
let bGC = "white";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bGC);
  displayButton();
}

// Holds the variables for the object Cactus
function spawnCactus() {
  let cactus = {
    dx: 1,
    catusHeight: random(5, 10),
    catusWidth: 5,
  };
}

// Displays a grey button at the top right of the screen
function displayButton() {
  fill(255/2);
  rect(width - 75, 0, 75, 75); 
}

// Changes the background colour between white and black when you click inside the bounds of displayButton().
function mousePressed() {
  if (mouseX >= width - 75 && mouseY <= 75) {
    bGCState = !bGCState;
    if (bGCState) {
      bGC = "white";
    }
    else if (!bGCState) {
      bGC = "black";
    }
  }
}