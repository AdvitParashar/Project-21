var bullet,speed,weight;
var wall,thickness;

function setup() {
createCanvas(1600,400);
wall = createSprite(1200,200, thickness, height/2);
bullet = createSprite(70,200,30,10);
thickness = random(22,83);
speed = random(233,321);
weight = random(30,52);
bullet.velocityX = speed;

}
function draw() {
  background(255,255,255);  
  drawSprites()

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
{
   bullet.velocityX = 0;
var damage =0.5 * weight * speed * speed / thickness * thickness * thickness;
  if(damage>10)
{
wall.shapeColor = color(255,0,0);
}

if(damage<10)
{
wall.shapeColor = color(0,255,0);
}

}









}

