/* eslint-disable indent */
// Sierpinski Triangle

let initialTriangle = [
  {x: 800, y: 25},
  {x: 50, y: 730},
  {x: 1550, y: 730}
];

let theDepth = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(initialTriangle, theDepth);
}

function sierpinski(points, depth) {
  triangle(points[0].x, points[0].y, 
           points[1].x, points[1].y,
           points[2].x, points[2].y);

  if (depth > 0) {
    sierpinski([points[0], 
      midpoint(points[0], points[1]), 
      midpoint(points[0], points[2])], 
      depth - 1);

      sierpinski([points[1], 
        midpoint(points[0], points[1]), 
        midpoint(points[1], points[2])], 
        depth - 1);

        sierpinski([points[2], 
          midpoint(points[1], points[2]), 
          midpoint(points[0], points[2])], 
          depth - 1);
  }
}

function midpoint(point1, point2) {
  let x = (point1.x + point2.x)/2
  let y = (point1.y + point2.y)/2
  return {x: x, y: y};
}

function mousePressed() {
  if (theDepth < 8) {
    theDepth++;
  }
}