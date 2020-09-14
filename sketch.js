var polygon,polygon_image;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  polygon_image = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200,725);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,50);
  groundLvl1 = new Ground(725,550,200,10);
  groundLvl2 = new Ground(1050,500,200,10);
 // holder1 = new Ground(950,482.5,10,45);
  //holder2 = new Ground(1155,482.5,10,45);

  block1 = new Box(650,500,50,75);
  block2 = new Box(700,500,50,75);
  block3 = new Box(750,500,50,75);
  block4 = new Box(800,500,50,75);

  block5 = new Box(675,425,50,75);
  block6 = new Box(725,425,50,75);
  block7 = new Box(775,425,50,75);

  block8 = new Box(700,350,50,75);
  block9 = new Box(750,350,50,75);

  block10 = new Box(725,275,50,75);


  block11 = new Box(975,460,50,75);
  block12 = new Box(1025,460,50,75);
  block13 = new Box(1075,460,50,75);
  block14 = new Box(1125,460,50,75);

  block15 = new Box(1000,385,50,75);
  block16 = new Box(1050,385,50,75);
  block17 = new Box(1100,385,50,75);

  block18 = new Box(1025,310,50,75);
  block19 = new Box(1075,310,50,75);

  block20 = new Box(1050,235,50,75);

  polygon = Bodies.circle(250,300,20,{restitution:0.4,isStatic:false, density:0.05});
  
  World.add(world, polygon);

  slingshot = new Chain(this.polygon,{x:250,y:350});
  
  Engine.run(engine);
}
           
function draw() {
  background(75,255,255);
  
  text("PRESS SPACE TO THROW AGAIN",100,100);

  imageMode(CENTER);
  image(polygon_image, polygon.position.x, polygon.position.y, 50, 50);

  Engine.update(engine);

  //console.log(this.polygon.position);

  ground.display();
  groundLvl1.display();
  groundLvl2.display();
  //holder1.display();
  //holder2.display();
  slingshot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();

  block10.display();


  block11.display();
  block12.display();
  block13.display();
  block14.display();
  
  block15.display();
  block16.display();
  block17.display();
  
  block18.display();
  block19.display();

  block20.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}
    
function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon, {x:250,y:350});
    slingshot.attach(this.polygon);      
  }
}
