// Arrays and Object Notation: Chrome T-Rex Game
// Chase Buniak
// October 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Variables and constants used
let cacti = [];
let bGCState = true;
let bGC = "white";
let y;
let characterPosition;
let characterHeight = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  y = height/3 *2;
  characterPosition = width/8;
}

function draw() {
  background(bGC);
  displayGame();
}

// Displays every element of the game
function displayGame() {
  noStroke();
  // stroke(0);
  displayButton();
  displayCharacter();
  displayGround();
}

// Displays a grey button at the top right of the screen
function displayButton() {
  fill(255/2);
  rect(width - 75, 0, 75, 75); 
}

// Creates a pink ellipse with blue eyes to act as the player character 
function displayCharacter() {
  fill('pink');
  ellipse(characterPosition, y - characterHeight/2, 100, characterHeight);
  fill('mediumslateblue');
  circle(characterPosition, y - characterHeight/1.5, 10)
  circle(characterPosition + 20, y - characterHeight/1.5, 10)
}

// Creates a line to act as the ground for the character and cacti
function displayGround() {
  stroke(255/2);
  line(0, height/3 * 2, width, height/3 * 2);
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

// Holds the variables for the object Cactus
function spawnCactus() {
  let someCactus = {
    dx: 1,
    catusHeight: random(5, 10),
    catusWidth: 5,
  };
  cacti.push(someCactus);
}
