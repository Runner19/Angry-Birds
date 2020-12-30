class Bird{
    constructor(x, y){
        var options = {
            density:2,
            friction:1,
            restitution:0.75
        }
        this.image = loadImage("/sprites/bird.png");
        this.body = B.rectangle(x, y, 50, 20, options); 
        this.width = 50;
        this.height = 50;
        this.trajectory = [];
        this.smokeImage = loadImage("/sprites/smoke.png");
        W.add(world, this.body);
     }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            var vel = this.body.velocity;
            //Smoke
            if(pos.x > 200 && vel.x > 10 && cons.constraint.bodyA == null){ 
                var Position = [pos.x, pos.y]; 
                this.trajectory.push(Position);
             }
            for(var i = 0; i < this.trajectory.length; i = i + 2){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
            }

            push();
            imageMode(CENTER);
            fill("red");
            translate(pos.x, pos.y);
            rotate(angle);
            image(this.image, 0, 0, this.width, this.height);
            pop();
     }
}