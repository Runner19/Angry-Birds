class SquareWoodLogs{
    constructor(x, y){
        var options = {
            // isStatic:true,
            friction:80,
            density:0.87
        }
       this.image = loadImage("wood1.png");
       this.body = B.rectangle(x, y, 40.9, 40.9, options); 
       this.width = 63.89;
       this.height = 63.89;
       W.add(world, this.body);
    }
       display(){
           var pos = this.body.position;
           var angle = this.body.angle;
           push();
           imageMode(CENTER)
           //making the border green of box
           stroke("green");
           translate(pos.x, pos.y);
           rotate(angle);
           image(this.image, 0, 0, this.width, this.height);
           pop();
       }
}
