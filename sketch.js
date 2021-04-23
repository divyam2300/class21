
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  a = createSprite(300, 100,80,30);
  a.shapeColor = "green";

  b= createSprite(100, 100, 50, 50);
  b.shapeColor = "green";
  
  c=createSprite(100,100,50,50);
  c.shapeColor="green";

d =createSprite(200,100,50,50);
d.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;

  if(isTouching(b,c)){
    b.shapeColor = "blue";
    c.shapeColor = "blue";
  }
  
  else {
    b.shapeColor = "green";
  
    c.shapeColor = "green"
  }
 
  if(isTouching(b,d)){
    b.shapeColor = "blue";
    d.shapeColor = "blue";
  }
  
  else {
    b.shapeColor = "green";
  
    d.shapeColor = "green"
  }
//bounceOff(movingRect,fixedRect)
  drawSprites();
}




