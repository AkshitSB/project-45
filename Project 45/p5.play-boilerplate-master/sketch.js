var bg, bgImg;
var player, playerImg;
var obstacleImage, obstacle;

function preload(){

  bgImg = loadImage("sprites/bg.gif");
  playerImg = loadImage("sprites/submarine.gif");
  obstacleImage = loadImage("SM.gif");

}



function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.1;

  obstacle = createSprite(700, 200, 50, 50);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;

  
}

function draw() {
  background(bgImg);  
  drawSprites();
}