var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background("pink");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(istouching(movingRect,fixedRect) )
  {movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";

}
else{movingRect.shapeColor="black";
fixedRect.shapeColor="black";

}
  drawSprites();
}





