var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;
Constraint = Matter.Constraint;

var engine;
var world;
var particles = [];
var boundaries = [];

var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var prev = null;
  for (var x = 20; x < 380; x += 40) {

    var p = new Particle(x, 100, 10);
    particles.push(p);

    if (prev) {
      var options = {
        bodyA: p.body,
        bodyB: prev.body,
        length: 50,
        stiffness: 0.4
      }
      var constraint = Constraint.create(options);
      World.add(world, constraint);
    }
    prev = p;
  }
  boundaries.push(new Boundary(200, height, width, 100));
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

  // line(particles[0].body.position.x, particles[0].body.position.y, particles[1].body.position.x, particles[1].body.position.y);

}