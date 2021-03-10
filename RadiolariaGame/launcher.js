class Launcher {
  constructor(x, y, body) {
    const options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.02,
      length: 40
    }
    this.launcher = Constraint.create(options);
    World.add(world, this.launcher);
  }

  launch() {
    this.launcher.bodyB = null;
  }

  show() {
    if (this.launcher.bodyB) {
      stroke(0);
      strokeWeight(1);
      const posA = this.launcher.pointA;
      const posB = this.launcher.bodyB.position;
      line(posA.x, posA.y, posB.x, posB.y);
    }
  }

  attach(body) {
    this.launcher.bodyB = body;
  }

}