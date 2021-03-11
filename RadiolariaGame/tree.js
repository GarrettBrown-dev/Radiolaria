function Tree(x, y, w, h, a) {
  var options = {
    isStatic: true,
    angle: a
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    noStroke();
    fill('brown');
    rect(0, 0, this.w, this.h);
    pop();
  }
}

