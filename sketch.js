const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var groundoptions={
        isStatic:true
    }

    var ball_options = {restitution:1}
    
   object= Bodies.rectangle(200,200,200,20);
    World.add(world,object);

   ground= Bodies.rectangle(200,380,400,15,groundoptions);
   World.add(world,ground)

ball= Bodies.circle(100,300,20,ball_options)
World.add(world,ball);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,15);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}
