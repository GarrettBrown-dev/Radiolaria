const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
var leaves = [];
var mPlankton = [];

function preload() {
  bkgImg = loadImage('img/background.jpg');
}

function setup() {
  createCanvas(1350, 650); // I couldn't get the auto window sizing to work, so these values will differ by screen!
  engine = Engine.create();
  world = engine.world;
  leaves.push(new Leaf(1000, 400, width * 0.175, 5, -0.3));
  leaves.push(new Leaf(750, 400, width * 0.175, 5, 0.3));
}


function mousePressed() {
  mPlankton.push(new Plankton(mouseX, mouseY, 5, 5))
}

function draw() {
  background(bkgImg);
  Engine.update(engine);
  for (var i = 0; i < mPlankton.length; i++) {
    mPlankton[i].show();
    if (mPlankton[i].isOffScreen()) {
      mPlankton[i].removeFromWorld();
      mPlankton.splice(i, 1);
      i--;
    }
  }
  for (var i = 0; i < leaves.length; i++) {
    leaves[i].show();
  }
}