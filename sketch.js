var bullet,wall;
var speed,weight,thickness;
var wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  //giving random position
 speed=random(233,321);
 weight=random(30,52)
 thickness=random(22,83);

 //creating car and wall
 bullet=createSprite(50,200,50,50);
 bullet.velocityX=speed;
 bullet.shapeColor="white";

 wall=createSprite(1500,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);


 
}

function draw() {
  background(0);
 if(hasCollied(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 }
 if(damage=10){
  
   wall.shapeColor="green";

 }
 if(damage=12){

   wall.shapeColor="red";

 }
 drawSprites();
}


function hasCollied(b,w){
 bulletRightEdge=b.x=b.weight;
 wall.x=w.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true
 }
   return false
}