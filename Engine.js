var E = Matter.Engine;
var W = Matter.World;
var B = Matter.Bodies;
var ground;
var engine;
var Ball;

function setup(){
   createCanvas(1400, 500);
   engine = E.create();
   var world = engine.world;
   var options = {
      isStatic:true
   }
   ground = B.rectangle(width/2, height, width, 20, options);
   W.add(world, ground);
   var option = {
      restitution:1
   }
   Ball = B.circle(39, 20, 20, option);
   W.add(world, Ball);
}

function draw(){
    background(0, 255, 0);
    E.update(engine);
    var pos = ground.position;
    var pos1 = Ball.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, width, 10);
    ellipse(pos1.x, pos1.y, 44);
 }