// Arrays and Object Notation: Chrome T-Rex Game
// Chase Buniak
// October 21, 2024
//
// Extra for Experts:
// Used audio features by importing an mp3 and using the play and volume functions.


// Variables used
let boulders = [];
let bGCState = true;
let bGC = "white";
let y;
let dy = 0;
let jumpPower = 25;
let ground;
let characterPosition;
let characterDiameter = 100;
let hide = false;
let universalGrey = 255/2;
let song;
let musicPlaying = false;
let v = 0.5;
let g = 1.5;
let airPosition;
const MINIMUM_DISTANCE_POSSIBLE = 90;
let intervalID;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = height/3 *2;
  y = ground;
  characterPosition = width/8;
  song = createAudio('tetris-theme.mp3');

  // Creates a boulder every three quarters of a second.
  intervalID = window.setInterval(createBoulder, 750);
}

function draw() {
  background(bGC);
  displayGame();
  spawnBoulder();
  moveBoulders();
  byeBoulders();
  playerGravity();
  crouch();
  playSong();
  gameOver();
}

// Displays every visible element of the game.
function displayGame() {
  noStroke();
  displayButton();
  displayCharacter();
  displayGround();
  displayBoulder();
}

// Displays a grey button with text at the top right of the screen.
function displayButton() {
  fill(universalGrey);
  rect(width - 75, 0, 75, 75); 
  if (bGCState) {
    fill(bGC);
    text("Dark", width - 70, 45);
  }
  else if (!bGCState) {
    fill(bGC);
    text("Light", width - 70, 45);
  }
}

// Creates a pink ellipse with blue eyes to act as the player character.
function displayCharacter() {
  fill('pink');
  circle(characterPosition, y - characterDiameter/2, characterDiameter);
  fill('mediumslateblue');
  circle(characterPosition, y - characterDiameter/1.5, 10);
  circle(characterPosition + 20, y - characterDiameter/1.5, 10);
}

// Creates a line to act as the ground for the character and boulders.
function displayGround() {
  stroke(universalGrey);
  line(0, ground, width, ground);
}

// Creates circles to act as boulders and flying boulders.
function displayBoulder() {
  for (let boulder of boulders) {
    fill(universalGrey);
    circle(boulder.boulderX, boulder.boulderY, boulder.boulderDiameter);
  }
}

// Moves the boulders to the left at a constant rate.
function moveBoulders() {
  for (let boulder of boulders) {
    boulder.boulderX -= boulder.dx;
  }
}

// Changes the background colour between white and black when you click inside the bounds of displayButton().
function mousePressed() {
  if (mouseX >= width - 75 && mouseY <= 75) {
    bGCState = !bGCState;
    if (bGCState) {
      bGC = "white";
      fill(bGC);
      text("Dark", width - 70, 75/2);
    }
    else if (!bGCState) {
      bGC = "black";
      fill(bGC);
      text("Light", width - 70, 75/2);
    }
  }
}

// Holds the variables for the object someBoulder.
function createBoulder() {
  let someBoulder = {
    dx: 10,
    boulderY: airBoulder(),
    boulderX: width,
    boulderDiameter: 100,
  };

  boulders.push(someBoulder);
}

// Returns a number to spawn a boulder either in the air or on the ground.
function airBoulder() {
  let num = random(4);
  if (num <= 3) {
    return ground;
  }
  else {
    return ground - 130;
  }
}

// Sets the hide state to true when the space bar is pressed, has the player jump when the up arrow is pressed and the down arrow is not being held, plays music when m is pressed.
function keyPressed() {
  if (keyCode === 32) {
    hide = true;
  }
  if (keyCode === 77) {
    musicPlaying = !musicPlaying;
  }
  if (keyCode === 38) {
    if (y === ground && !keyIsDown(DOWN_ARROW)) {
      dy = -jumpPower;
    }
  }
}

// Gives the player simulated gravity tied to the frame rate rather than computer hardware.
function playerGravity() {
  y += dy;
  if (y <= ground) {
    dy += g;
  }
  else {
    y = ground;
    dy = 0;
  }
}

// Reduces the characterDiameter variable to simulate crouching if the down arrow is held and the player is on the ground.
function crouch() {
  if (keyIsDown(DOWN_ARROW) && y === ground) {
    characterDiameter = 75;
  }
  else {
    characterDiameter = 100;
  }
}

// Displays text with the controls until the space bar is pressed , then has the text disappear
function spawnBoulder() {
  if (hide === false) {
    fill(universalGrey);
    textSize(30);
    text("Up arrow to jump, down arrow to crouch, m to play the tetris theme, space to hide text.", width/5, height/3);
  }
}

// Makes boulders disappear when they reach the far left side of the screen.
function byeBoulders() {
  for (let boulder of boulders) {
    if (boulder.boulderX === 0) {
      let index = boulders.indexOf(boulder);
      boulders.splice(index, 1);
    }
  }
}

// Calculates the distance between the character and the boulders to know if you get hit, stops the spawning of boulders if you are hit and displays game ever text.
function gameOver() {
  for (let boulder of boulders) {
    let d = dist(characterPosition, y - characterDiameter/2, boulder.boulderX, boulder.boulderY);
    if (d < MINIMUM_DISTANCE_POSSIBLE) {
      boulder.dx = 0;
      fill(universalGrey);
      textSize(50);
      text("Game Over! Refresh to play again.", width/3.5, height/2.5);
      window.clearInterval(intervalID);
    }
  }
}

// Plays music if the m key has been pressed to set musicPlaying to true.
function playSong() {
  song.volume(v);
  if (musicPlaying === true) {
    song.play();
    musicPlaying = false;
  }
}