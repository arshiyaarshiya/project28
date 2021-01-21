
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100, 60,30);
	mango2 = new Mango(1000, 250, 30);
	mango3 = new Mango(1000, 100, 30);
	mango4 = new Mango(900 , 200, 30);
	mango5 = new Mango(1050, 170, 30);
	mango6 = new Mango(1150, 200, 30);
	mango7 = new Mango(1240, 230, 30);
	mango8 = new Mango(1170, 120, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1 = new Stone(247, 415, 20);
	launcherObject  = new Sling(stone1.body,{x: 247, y: 415});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();

  launcherObject.display();

  groundObject.display();

  stone1.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  aCO(stone1, mango1);
  aCO(stone1, mango2);
  aCO(stone1, mango3);
  aCO(stone1, mango4);
  aCO(stone1, mango5);
  aCO(stone1, mango6);
  aCO(stone1, mango7);
  aCO(stone1, mango8);

  textSize(30);
  text("Press space key to get another chance !",100,100);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}

function aCO(lstone, lmango) {

	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x , mangoBodyPosition.y) 
	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {

	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x: 235, y: 420});
		launcherObject.attach (stone1.body);
	}
}	