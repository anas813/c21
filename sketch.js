var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(100, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1=createSprite(200,200,50,80);
  fixedRect1.shapeColor="orange";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if( isTouching(movingRect,fixedRect) ) {
  movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  
 }

 else if (isTouching(movingRect,fixedRect1)) {
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
 } 
 else {
   movingRect.shapeColor="orange";
   fixedRect.shapeColor="orange";
   fixedRect1.shapeColor="orange";
 }
  drawSprites();   
}

