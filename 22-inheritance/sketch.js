// OOP Inheritance

class Shape {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
    this.colour = colour;
  }

  display() {
    noStroke();
    fill(this.colour);
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

class Circle extends Shape {
  constructor(x, y, colour, radius) {
    super(x, y, colour);
    this.radius = radius;
  }

  display() {
    super.display();
    circle(this.x, this.y, this.radius*2);
  }
}

class Square extends Shape {
  constructor(x, y, colour, size) {
    super(x, y, colour);
    this.size = size;
  }

  display() {
    super.display();
    square(this.x, this.y, this.size);
  }
}

let theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);

  for (let aShape of theShapes) {
    aShape.move();
    aShape.display();
  }
}


function mousePressed() {
  for (let i = 0; i < 100; i++) {
    if (random(100) < 50) {
      let someCircle = new Circle(random(width), random(height), color(random(255), random(255), random(255)), random(20,50));
      theShapes.push(someCircle);
    }
    else {
      let someSquare = new Square(random(width), random(height), color(random(255), random(255), random(255)), random(20,50));
      theShapes.push(someSquare);
    }
  }
}