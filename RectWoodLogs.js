class RectWoodLogs{
    constructor(x, y, height, Angle){
      var options = {
         friction:80,
         density:4
     }
       this.body = B.rectangle(x, y, 20, height, options); 
       this.width = 21;
       this.height = height;
       this.x = x;
       this.y = y;
       this.image = loadImage("/sprites/wood2.png");
       Matter.Body.setAngle(this.body, Angle);
       W.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       imageMode(CENTER);
       translate(pos.x, pos.y);
       rotate(angle);
       image(this.image, 0, 0, this.width, this.height);
       pop();
       }
}