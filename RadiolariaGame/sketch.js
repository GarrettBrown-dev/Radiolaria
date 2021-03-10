const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

function preload() {
  bkgImg = loadImage('img/background.jpg');
}

function setup() {
  var canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
  leaves.push(new Leaf(150, 200, width * 0.6, 20, 0.3));
  leaves.push(new Leaf(250, 300, width * 0.6, 20, -0.3));
  ground = new Leaf(200, height, width, 100);


  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };
}

function draw() {
  background(bkgImg);
  circles.push(new Circle(200, 50, random(5, 10)));
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);
      i--;
    }
  }
  for (var i = 0; i < leaves.length; i++) {
    leaves[i].show();
  }
}