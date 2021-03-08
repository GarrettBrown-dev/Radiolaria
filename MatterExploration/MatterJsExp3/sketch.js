let ground;

function setup() {
  createCanvas(600, 400);
  ground = new Box(0, height - 20, width, 20);
}

function draw() {
  background(0);
  ground.show();
}