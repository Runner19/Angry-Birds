class Piggies extends BaseClass {
    constructor(x, y,){
        super(x, y, 50, 50);
        this.image = loadImage("enemy.png");
        this.visibility = 255;
        
     }
     display(){
        push();
        imageMode(CENTER);
        if(this.body.speed >= 13){
        this.visibility = this.visibility - 1;
        tint(255, this.visibility);
        super.display();
        }
        else{
         super.display();
        }
        pop();
     }

     score(){
        if(this.visibility < 250 && this.visibility > -500){
          score = score + 1;
        }
     }
}
