class Plankton {
  constructor(x, y, r) {
    const options = {
      restitution: 0.5
    }
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.Body.setMass(this.body, this.body.mass * 1);
    Matter.World.add(world, this.body);
    this.r = r;

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
}