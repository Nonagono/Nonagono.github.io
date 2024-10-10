// Bubble array object notation demo
// Removing objects from the array

let bubbles = [];
let deathLocations = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 50000; i++) {
    spawnBubble();
  }

  //create new bubble every half second
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background(220);
  // moveBubblesRandomly();

  moveBubblesWithNoise();
  displayBubbles();
  displayDeathSpots();
}

function mousePressed() {
  for (let bubble of bubbles) {
    if (clickedInBubble(mouseX, mouseY, bubble)) {
      let theIndex = bubbles.indexOf(bubble);
      bubbles.splice(theIndex, 1);
      addDeath(mouseX, mouseY);
    }
  }
}

function displayDeathSpots() {
  for (let spot of deathLocations) {
    textAlign(CENTER, CENTER);
    fill('black');
    text("X", spot.x, spot.y);
  }
}

function addDeath(_x, _y) {
  let deathSpot = {
    x: _x,
    y: _y,
  };
  deathLocations.push(deathSpot);
}

function clickedInBubble(x, y, theBubble) {
  let distanceAway = dist(x, y, theBubble.x, theBubble.y);
  if (distanceAway < theBubble.radius) {
    return true;
  }
  else {
    return false;
  }
}

function displayBubbles() {
  for (let bubble of bubbles) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.radius * 2);
  }
}

function moveBubblesWithNoise() {
  for (let bubble of bubbles) {
    let x = noise(bubble.timeX) * width;
    let y = noise(bubble.timeY) * height;

    bubble.x = x;
    bubble.y = y;

    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }
}

// function moveBubblesRandomly() {
//   for (let bubble of bubbles) {
//     let choice = random(100);
//     if (choice < 50) {
//       // Move up
//       bubble.y -= bubble.speed;
//     }
//     else if (choice < 65) {
//       // Move down
//       bubble.y += bubble.speed;
//     }
//     else if (choice < 82) {
//       // Move right
//       bubble.x += bubble.speed;
//     }
//     else {
//       // Move left
//       bubble.x -= bubble.speed;
//     }
//   }
// }

function spawnBubble() {
  let someBubble = {
    x: random(width),
    y: height + random(0, 25),
    speed: random(2, 5),
    radius: random(20, 40),
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(9999999999),
    timeY: random(9999999999),
    deltaTime: 0.01,
  };
  bubbles.push(someBubble);
}
