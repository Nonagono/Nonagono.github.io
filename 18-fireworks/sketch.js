// Fireworks OOP

const FIREWORKS_PER_CLICK = 100;

class Particle{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.size = 5;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opacity = 255;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity -= 5;
  }

  isDead() {
    return this.opacity <= 0;
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {

  for (let firework of theFireworks) {
    if (firework.isDead()) {
      let index = theFireworks.indexOf(firework);
      theFireworks.splice(index, 1);
    }
    else {
      firework.update();
      firework.display();
    }

  }
}

function mousePressed() {
  for (let i = 0; i < FIREWORKS_PER_CLICK; i++) {
    let someFirework = new Particle(mouseX, mouseY);
    theFireworks.push(someFirework);
  }
}