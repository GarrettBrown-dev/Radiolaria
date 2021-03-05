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

  var p1 = new Particle(230, 100, 10);
  var p2 = new Particle(200, 150, 10);
  particles.push(p1, p2);

  var options = {
    bodyA: p1.body,
    bodyB: p2.body,
    length: 50,
    stiffness: 0.4
  }
  var constraint = Constraint.create(options);

  boundaries.push(new Boundary(200, height, width, 100));
  World.add(world, constraint);
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

  line(particles[0].body.position.x, particles[0].body.position.y, particles[1].body.position.x, particles[1].body.position.y);

}