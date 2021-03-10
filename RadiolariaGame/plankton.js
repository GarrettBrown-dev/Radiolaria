function Plankton(x, y, r) {
  var options = {
    friction: 0,
    restitution: 0.6,
  }
  this.body = Bodies.plankton(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.isOffScreen = function () {
    var pos = this.body.position;
    return (pos.y > height + 100);
  }

  this.removeFromWorld = function () {
    World.remove(world, this.body);
  }

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill('pink');
    ellipse(0, 0, this.r * 2);
    line(0, 0, this.r, 0);
    pop();
  }

}