const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
var leaves = [];
var trees = [];
var mPlankton = [];

function preload() {
  bkgImg = loadImage('img/background.jpg');
}

function setup() {
  createCanvas(1350, 650); // I couldn't get the auto window sizing to work, so these values will differ by screen!
  engine = Engine.create();
  world = engine.world;
  leaves.push(new Tree(865, 150, width * 50, 35, 1.57));
  leaves.push(new Leaf(1000, 400, width * 0.175, 5, -0.3));
  leaves.push(new Leaf(1000, 275, width * 0.150, 5, -0.3));
  leaves.push(new Leaf(1000, 150, width * 0.115, 5, -0.3));
  leaves.push(new Leaf(750, 400, width * 0.175, 5, 0.3));
  leaves.push(new Leaf(750, 275, width * 0.150, 5, 0.3));
  leaves.push(new Leaf(750, 150, width * 0.115, 5, 0.3));
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
  for (var i = 0; i < trees.length; i++) {
    trees[i].show();
  }
  for (var i = 0; i < leaves.length; i++) {
    leaves[i].show();
  }
}