// Traffic Light Starter Code
// Sept 24, 2024

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let wait = 2000;
let pWait = 0;
let lC = 'green';

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  lightColour();
}

function lightColour() {
  if (millis() > wait + pWait)
    if (lC === 'green') {
      fill(lC);
      ellipse(width/2, height/2 + 65, 50, 50);
      pWaitwait = millis();
    }
    if (lc === 'yellow') {
      fill(lC);
      ellipse(width/2, height/2, 50, 50);
      pWaitait = millis() + 4000;
    }
    if (lC === 'red') {
      fill(lC);
      ellipse(width/2, height/2 - 65, 50, 50);
      pWaitwait = millis() + 4000;
    }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}