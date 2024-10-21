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
let ground;
let characterPosition;
let characterHeight = 100;
let yx = 0;
let start = false;
let universalGrey = 255/2;
let song;
let musicPlaying = false;
let v = 0.5;
let g = 0.1;
let drag;
let isJumping = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = height/3 *2;
  y = ground;
  characterPosition = width/8;
  song = createAudio('tetris-theme.mp3');
}

function draw() {
  background(bGC);
  displayGame();
  crouch();
  playSong();
}

// Displays every element of the game
function displayGame() {
  noStroke();
  displayButton();
  displayCharacter();
  displayGround();
  displayCacti();
}

// Displays a grey button at the top right of the screen
function displayButton() {
  fill(universalGrey);
  rect(width - 75, 0, 75, 75); 
}

// Creates a pink ellipse with blue eyes to act as the player character 
function displayCharacter() {
  fill('pink');
  ellipse(characterPosition, y - characterHeight/2, 100, characterHeight);
  fill('mediumslateblue');
  circle(characterPosition, y - characterHeight/1.5, 10);
  circle(characterPosition + 20, y - characterHeight/1.5, 10);
}

// Creates a line to act as the ground for the character and cacti
function displayGround() {
  stroke(universalGrey);
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

// Holds the variables for the object someCactus
function spawnCactus() {
  let someCactus = {
    dx: 1,
    catusHeight: random(5, 10),
    catusWidth: 5,
  };

  cacti.push(someCactus);
}

// Sets the start state to true when the space bar is pressed, runs the jump function when the up arrow is pressed, plays music when m is pressed.
function keyPressed() {
  if (keyCode === 32) {
    start = true;
  }
  if (keyCode === 77) {
    musicPlaying = !musicPlaying;
  }
  if (keyCode === 38) {
    if (!isJumping) {
      isJumping = true;
      jump();
    }
  }
}

function jump() {
  if (isJumping) {
    yx += g;
    y -= yx;
    yx -= 0.01;
  }
  isJumping = false;
}

// Reduces the characterHeight variable to simulate crouching if the down arrow is held
function crouch() {
  if (keyIsDown(DOWN_ARROW)) {
    characterHeight = 75;
  }
  else {
    characterHeight = 100;
  }
}

// Displays text with the controls until the space bar is pressed , then starts spawning obstacles
function displayCacti() {
  if (start === false) {
    fill(universalGrey);
    textSize(30);
    text("Up arrow to jump, down arrow to crouch, space to start, m to play the tetris theme.", width/5, height/3);
  }
  else {
    // 
  }
}

function playSong() {
  song.volume(v);
  if (musicPlaying === true) {
    song.play();
  }
}