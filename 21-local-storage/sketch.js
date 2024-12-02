// Local Storage Demo

let numberOfClicks = 0;
let highestClicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highest")) {
    highestClicks = getItem("highest");
  }
}

function draw() {
  background(220);
  displayClicks();
  displayHighest();
}

function displayClicks() {
  fill("black");
  textSize(50);
  text(numberOfClicks, 100, height/2);
}

function displayHighest() {
  fill("green");
  textSize(50);
  text(highestClicks, 400, height/2);
}

function mousePressed() {
  numberOfClicks++;
  if (numberOfClicks > highestClicks) {
    highestClicks = numberOfClicks;
    storeItem("highest", highestClicks);
  }
}