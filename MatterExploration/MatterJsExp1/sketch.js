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
  box1 = Bodies.rectangle(400, 200, 80, 80);
  Engine.run(engine);
  console.log(box1);
}

function draw() {
  background(51);

}