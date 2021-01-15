var fixedRect,movingRect;
var edges;
function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  fixedRect= createSprite(800, 0, 50, 80);
  movingRect= createSprite(0, 400, 80, 30);
  movingRect.velocityX = 5
  fixedRect.velocityX = -5
  movingRect.velocityY = -4
  fixedRect.velocityY = 4
}

function draw() {
  background(255,255,255);  
createEdgeSprites();
movingRect.bounceOff(edges)
fixedRect.bounceOff(edges)
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {
    movingRect.velocityX = -(movingRect.velocityX)
    fixedRect.velocityX = -(fixedRect.velocityX)
    movingRect.velocityY = -(movingRect.velocityY)
    fixedRect.velocityY = -(fixedRect.velocityY)
  }

  drawSprites();
}
