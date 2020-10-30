class Stone  {
  constructor(x,y,r){
    var options = {
      isStatic:false,
      'restitution':0.0,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y,r/2, options);
  this.x=x;
  this.y=y;
  this.r=r;
  this.image = loadImage("sprites/stone.png");
  World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.r*2, this.r*2);
    pop();
  }
}
