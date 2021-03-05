var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var particles = [];
var boundaries = [];

var ground;

var mConstraint;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var prev = null;
  for (var x = 200; x < 400; x += 20) {

    var fixed = false;
    if (!prev) {
      fixed = true;
    }
    var p = new Particle(x, 100, 5, fixed);
    particles.push(p);

    if (prev) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 20,
        stiffness: 0.4
      }
      var constraint = Constraint.create(options);
      World.add(world, constraint);
    }
    prev = p;
  }
  boundaries.push(new Boundary(200, height, width, 100));

  var canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasMouse
  }
  mConstraint = MouseConstraint.create(engine, options)
  World.add(world, mConstraint);
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
  }

  if (mConstraint.body) {
    var pos = mConstraint.body.position;
    fill(0, 255, 0);
    ellipse(pos.x, pos.y, 20, 20);
  }

}