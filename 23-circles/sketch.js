// Fractal Circles

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  recursiveCircle(width/2, height/2, width/2);
}

function recursiveCircle(x, y, r) {
  circle(x, y, r*2);

  if (r > 1) {
    recursiveCircle(x - r/2, y, r/2);
    recursiveCircle(x + r/2, y, r/2);
  }
}