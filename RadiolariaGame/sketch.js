const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

function preload() {
  bkgImg = loadImage('img/background.png');
}

function setup() {
  const canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
}

const mouse = Mouse.create(canvas.elt);
const options = {
  mouse: mouse
};

function draw() {
  background(bkgImg);
  Engine.update(engine);
}