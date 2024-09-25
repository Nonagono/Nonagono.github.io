// Traffic Light Starter Code
// Sept 24, 2024

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lState = "green";
let previousSwitchTime = 0;
const GREEN_LIGHT_DURATION = 6000;
const YELLOW_LIGHT_DURATION = 2000;
const RED_LIGHT_DURATION = 6000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  changeState();
  lightColour();
}

function changeState() {
  if (lState === "green" && millis() > previousSwitchTime + GREEN_LIGHT_DURATION) {
    lState = "yellow";
    previousSwitchTime = millis();
  }
  else if (lState === "yellow" && millis() > previousSwitchTime + YELLOW_LIGHT_DURATION) {
    lState = "red";
    previousSwitchTime = millis();
  }
  else if (lState === "red" && millis() > previousSwitchTime + RED_LIGHT_DURATION) {
    lState = "green";
    previousSwitchTime = millis();
  }
}

function lightColour() {
  if (lState === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (lState === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50);
  }
  else if (lState === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50);
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