//Generative Art
//Oct 4, 2024

const TILE_SIZE = 10;
let theTiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += TILE_SIZE) {
    for (y = 0; y < height; y += TILE_SIZE) {
      let someTile = spawnTile(x, y);
      theTiles.push(someTile);
    }
  }
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  background(r, g, b);
  // background(218, 83, 102);

  for (let myTile of theTiles) {
    stroke(myTile.red, myTile.green, myTile.blue);
    // strokeWeight()
    line(myTile.x1, myTile.y1, myTile.x2, myTile.y2);
  }
}

function spawnTile(x, y) {
  let tile;
  let choice = random(100);

  if (choice > 50) {
    //negative slope
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y - TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y + TILE_SIZE/2,
      red: random(255),
      green: random(255),
      blue: random(225),
    };
  }
  else {
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y + TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y - TILE_SIZE/2,
      red: random(255),
      green: random(255),
      blue: random(225),
    };
  }

  return tile;
}