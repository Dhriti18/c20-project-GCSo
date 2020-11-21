var wall,car;
var speed,weight; 
function setup() {
  createCanvas(900,400);
  speed=random(55,90);
  weight=random(400,1500);
  
 car=createSprite(10,300,30,30);
 car.velocityX=speed;
  car.shapeColor="white";

  
  
  wall=createSprite(870,200,40,height/2);
  wall.shapeColour="grey";
  
}

function draw() {
  background(0);
  
  
  drawSprites();
 
  if(wall.x-car.x<(wall.width+ car.width)/2){
    car.velocityX=0;
    
    var deformation= 0.5* weight *speed * speed /22509;
    if(deformation<100){
      car.shapeColor=color(0,255,0)
  } 


  if(deformation<180 && deformation>100){
 car.shapeColor=color(230,230,0);}
   
 if(deformation>180){
car.shapeColor=colour(255,0,0);
}
}}
