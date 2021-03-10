const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
var leaves = [];
var mPlankton = [];

function preload() {
  bkgImg = loadImage('img/background.jpg');
}

function setup() {
  var canvas = createCanvas(1500, 700); // I couldn't get the auto window sizing to work, so these values will differ by screen!
  engine = Engine.create();
  world = engine.world;
  leaves.push(new Leaf(100, 200, width * 0.6, 20, 0.3));
  leaves.push(new Leaf(400, 300, width * 0.6, 20, -0.3));


  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };
}

function draw() {
  background(bkgImg);
  mPlankton.push(new Plankton(2, 5, 5));
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