
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
boyImg=loadImage("sprites/boy.png")	
treeImg=loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(500,600,1000,10);
boy=createSprite(200,500,30,40);
boy.addImage(boyImg);
boy.scale=0.12;
tree=new Tree(700,300,50,50);

mango1=new Mango(780,200,50)
mango2=new Mango(690,120,50)
mango3=new Mango(800,220,50)
mango4=new Mango(700,190,50)
mango5=new Mango(600,170,50)
stone1=new Stone(110,410,30)
	Engine.run(engine);

	rpe = new Rope(stone1.body,{x:110,y:410});
}

function draw() {
  rectMode(CENTER);
  background(200);
  ground1.display();
  drawSprites();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 stone1.display();
 tree.display();
 rpe.display();
}




function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  rpe.fly();
  }
