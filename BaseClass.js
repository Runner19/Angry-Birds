class BaseClass{
    constructor(x, y, width, height){
       var options = {
          density:1,
          friction:1
       }
       this.body = B.rectangle(x, y, width, height, options); 
       this.width = width;
       this.height = height;
       this.image = loadImage("sprites/wood2.png");
       W.add(world, this.body);
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       //making the border green of box
       stroke("green");
       translate(pos.x, pos.y);
       rotate(angle);
       image(this.image, 0, 0, this.width, this.height);
       pop();
       }
}