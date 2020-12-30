class Ground{
    constructor(x, y, width){
      var Options = {
        isStatic:true,
        friction:80
      }
     this.width = width;
     this.body = B.rectangle(x, y, width, 20, Options);
     this.height = 20;
     W.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      var pos = this.body.position;
      var Angle = this.body.angle;
      //For Saving
      push();
      translate(pos.x, pos.y);
      rect(0, 0, this.width, this.height);
      //For Deleting
      pop();
    }
}