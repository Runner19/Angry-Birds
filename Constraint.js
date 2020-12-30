class Constraint{
    constructor(A, B){
        var options = {
            bodyA:A,
            pointB:B,
            length:40,
            stiffness:0.04,
        }    
        this.constraint = C.create(options);
        W.add(world, this.constraint);
        this.image = loadImage("sprites/sling1.png");
        this.images2 = loadImage("sprites/sling2.png");
        this.images3 = loadImage("sprites/sling3.png");
    }

    display(){
        image(this.image, 216, 45);
        image(this.images2, 189, 45);
        if(this.constraint.bodyA != null){
        var bodyA = this.constraint.bodyA.position;
        var bodyB = this.constraint.pointB;
        if(bodyA.x <= 216){
            image(this.images3, bodyA.x - 23, bodyA.y, 8, 19);
        }
        else{
        image(this.images3, bodyA.x + 23, bodyA.y, 8, 19);
        }
        line(bodyA.x, bodyA.y, bodyB.x + 60, bodyB.y - 45);
        line(bodyA.x, bodyA.y, bodyB.x + 100, bodyB.y - 45);
        }
    }

    fly(){
        this.constraint.bodyA = null;
    }
}