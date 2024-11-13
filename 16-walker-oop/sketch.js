// Walker OOP

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.speed = 50;
    this.radius = 20;
    this.color = theColor;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(111);
    if (choice < 28) {
      this.y -= this.speed;
    }
    else if (choice < 56) {
      this.y += this.speed;
    }
    else if (choice < 83) {
      this.x -= this.speed;
    }
    else if (choice < 111) {
      this.x += this.speed;
    }
  }
}

let chud;
let bobby;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  chud = new Walker(width/2, height/2, "blue");
  bobby = new Walker(width/10, height/10, "pink");
}

function draw() {
  chud.display();
  bobby.display();

  chud.move();
  bobby.move();
}
