var E = Matter.Engine;
var W = Matter.World;
var B = Matter.Bodies;
var C = Matter.Constraint;
var box1, bird, square, rect1, box2, box3, box4, rect2, box5, rect3, rect4, Pig1, Pig2;
var Background, Birdeeee;
var engine, world, ground, cons, Platform, score = 0;

function preload(){
     JSON();
     Background = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1400, 500);
    engine = E.create();
    world = engine.world;

    //Bodies
    ground = new Ground(width/2, 500, width, 20);
    box1 = new SquareWoodLogs(1130, 294);
    box2 = new SquareWoodLogs(1300, 295); 
    Matter.Body.setDensity (box2.body, 1); 
    rect1 = new RectWoodLogs(1209, 234, 245, PI/2);
    box3 = new SquareWoodLogs(1300, 165);
    box4 = new SquareWoodLogs(1130, 165);
    rect2 = new RectWoodLogs(1209, 117.3, 245, PI/2);
    box5 = new SquareWoodLogs(1219, 50);
    Pig1 = new Piggies(1213, 294);
    Pig2 = new Piggies(1213, 165);
    rect3 = new RectWoodLogs(1180, 18, 116, PI/7);
    rect4 = new RectWoodLogs(1270, 18, 116, -PI/7);
    Birdeeee = new Bird(12, 18);
    cons = new Constraint(Birdeeee.body, {x:140, y:98});
    Platform = new Ground(130, 400, 290);
    Platform.height = 340;
}

function draw(){
    background(Background);
    rectMode(CENTER);
    E.update(engine);
    push()
    textSize(20)
    text("Score: " + score, 20, 20);  //Concatenation
    pop();
    box1.display();
    box2.display();
    rect1.display();
    box3.display();
    box4.display();
    rect2.display();
    box5.display();
    fill("violet");
    ground.display();
    Pig1.display();
    Pig1.score();
    Pig2.display();
    Pig2.score();
    rect3.display();
    rect4.display();
    Birdeeee.display();
    cons.display();
    fill("cyan");
    Platform.display();
}

function mouseDragged(){
     Matter.Body.setPosition(Birdeeee.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
     cons.fly();
}

async function JSON(){
   var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var JSON_response = await response.json();
   var dateTime = JSON_response.datetime
   var hour = dateTime.slice(11, 13);
   if(hour > 16){
     Background = loadImage("/sprites/bg2.jpg");
   }
}