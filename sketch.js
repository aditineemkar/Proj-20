//creating global variables
var car;
var wall;
var line;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55.90); 
  // speed=random(50,180); 
  weight=random(55,90);

  car=createSprite(50, 200, 10, 10);
  car.shapeColor="white";
  car.velocityX=speed;
  
  wall=createSprite(700, 200, 5, height/2);
  wall.shapeColor="orange";



}

function draw() {
  background("black"); 
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 50 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
 drawSprites();
}