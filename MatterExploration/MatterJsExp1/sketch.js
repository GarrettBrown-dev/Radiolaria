var Engine = Matter.Engine,
  // Render = Matter.Render Unused due to having P5.
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var box1;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  box1 = Bodies.rectangle(200, 100, 80, 80);
  Engine.run(engine);
  World.add(world, box1);
}

function draw() {
  background(51);

  rect(box1.position.x, box1.position.y, 80, 80)
}