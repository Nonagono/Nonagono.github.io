// Square Moving Around Screen
// Chase Buniak
// September 19, 2024



let s = 100;
let y = 0;
let x = 0;
let v = 25;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (random(255), random(255), random(255));
  square(x, y, s);
  noStroke();
  if (y === 0 && x <= width - s) {
    x = x + v;
  }
  if (x === width - s && y <= height - s) {
    y = y + v;
  }
  if (y === height - s && x >= 0) {
    x = x - v;
  }
  if (x === 0 && y >= 0) {
    y = y - v;
  }
}
