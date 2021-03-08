let ground;
let box;
let bird;
let world, enginer;

function setup() {
  createCanvas(600, 400);
  engine = Matter.Engine.create();
  world = engine.world;
  ground = new Box(width / 2, height - 10, width, 20);
  box = new Box(450, 300, 50, 75);
  bird = new Bird(50, 300, 25);
}

function draw() {
  background(0);
  ground.show();
  box.show();
  bird.show();
}