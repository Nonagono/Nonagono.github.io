// Walker OOP

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.radius = 5;
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
      if (this.y > this.radius) {
        this.y -= this.speed;
      }
    }
    else if (choice < 56) {
      if (this.y < height - this.radius) {
        this.y += this.speed;
      }
    }
    else if (choice < 83) {
      if (this.x > this.radius) {
        this.x -= this.speed;
      }
    }
    else if (choice < 111) {
      if (this.x < width - this.radius) {
        this.x += this.speed;
      }
    }
  }
}

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  let chud = new Walker(width/2, height/2, "blue");
  walkerArray.push(chud);
}

function draw() {
  for (let theWalker of walkerArray) {
    theWalker.display();
    theWalker.move();
  }
}

function mousePressed() {
  let randomColor = color(random(255), random(255), random(255));
  let someWalker = new Walker(mouseX, mouseY, randomColor);
  walkerArray.push(someWalker);
}