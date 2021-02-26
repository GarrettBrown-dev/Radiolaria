var Engine = Matter.Engine,
  // Render = Matter.Render Unused due to having P5.
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(51);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}