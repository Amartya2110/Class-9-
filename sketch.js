var a
function setup() {
  createCanvas(400,400);
  a=createSprite(200,200,50,50)
  a.shapeColor = "red"
}

function draw() 
{
  background("white");

if(keyIsDown(UP_ARROW)){
  a.position.y = a.position.y-3;
}
if(keyIsDown(RIGHT_ARROW)){
  a.position.x = a.position.x+3;
}
if(keyIsDown(DOWN_ARROW)){
  a.position.y = a.position.y+3;
}
if(keyIsDown(LEFT_ARROW)){
  a.position.x = a.position.x-3;
}
drawSprites();

} 




