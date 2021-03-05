var Engine = Matter.Engine,
  // Render = Matter.Render Unused due to having P5.
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Boundary(200, height, width, 100);
  World.add(world, ground);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  ground.show();
}