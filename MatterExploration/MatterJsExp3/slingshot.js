class SlingShot {
  constructor(x, y, body) {

    const options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.5,
      length: 20
    }
    this.sling = Constraint.create(options);
    World.add(world, this.sling);

  }

  show() {
    stroke(255);
    const posA = this.sling.pointA;
    const posB = this.sling.bodyB.position;
    line(posA.x, posA.y, posB.x, posB.y);
  }

}