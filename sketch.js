var moving,fixed
function setup() {
  createCanvas(1800,1400);
  moving=createSprite(400, 200, 50, 50);
  fixed=createSprite(100,300,50,70)
}

function draw() {
  background(255,255,255);
  moving.x=World.mouseX;
  moving.y=World.mouseY;  
  drawSprites();
}
