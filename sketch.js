
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,boy,dust;
var backimg;


function preload()
{
	backimg = loadImage("trees.jpg");
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	ball = new Ball(50,50,30,30);
	boy = new Boy(250,350,100,100);
	dust = new Dust(750,350,70,70);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(backimg);
  
  drawSprites();
  ball.display();
  boy.display();
  dust.display();
 
}



