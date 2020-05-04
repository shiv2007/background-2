

var rect



function setup(){

  createCanvas(1200,400);
  rect = createSprite(600,200,50,50);
}


function draw(){
 
  
  rect.x = World.mouseX;
  rect.y = World.mouseY;

  rect.shapeColor = "blue";

  
  drawSprites();
}