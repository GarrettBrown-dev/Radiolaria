var Engine = Matter.Engine,
  // Render = Matter.Render Unused due to having P5.
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  // Engine.run(engine); Having this was causing rectangles to glitch through the ground. Can be fixed with Engine.update, smaller timesteps, or thicker floors.

  boundaries.push(new Boundary(150, 200, width * 0.6, 20, 0.3));
  boundaries.push(new Boundary(250, 300, width * 0.6, 20, -0.3));
  ground = new Boundary(200, height, width, 100);
}

// function mouseDragged() {
//   circles.push(new Circle(mouseX, mouseY, random(5, 10)));
// }

function draw() {
  background(51);
  circles.push(new Circle(200, 50, random(5, 10)));
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles.splice(i, 1);
      i--;
    }
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}