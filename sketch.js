var player;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16;

var bgImage;
var standImg,walkImg,deadImg,hrImage,vrImage;
var laptop,emergencyButton,laptopImage,emergencyButtonImage;

var lpSwitch,lpCount=0;
var card,cardImage;
var gameState="noText";
function preload(){

standImg=loadImage("images/stand.png");
deadImg=loadImage("images/dead.png");
walkImg=loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png");
bgImage=loadImage("images/bg1.jpg");
hrImage=loadImage("images/hr.png");
vrImage=loadImage("images/vr.png");
}


function setup() {
  createCanvas(1200,800);
player=  createSprite(400, 200, 50, 50);
player.addImage("stand",standImg);
player.addAnimation("walk",walkImg);
player.addImage("dead",deadImg);


block1=createSprite(280,50,400,10);
block1.addImage("hr",hrImage);
block1.scale=2;

block2=createSprite(55,200,10,300);
block2.addImage("vr",vrImage);
block2.scale=2;


block3=createSprite(280,360,400,10);
block3.addImage("hr1",hrImage);
block3.scale=2;

block4=createSprite(500,150,10,150);

block5=createSprite(600,250,150,10);

block6=createSprite(600,350,150,10);

block7=createSprite(700,150,10,150);

block8=createSprite(900,50,400,10);

block9=createSprite(1130,200,10,300);

block10=createSprite(830,350,200,10);

block11=createSprite(950,450,10,200);

block12=createSprite(1130,450,10,200);

block13=createSprite(1130,650,10,200);

block14=createSprite(830,550,200,10);

block15=createSprite(930,750,300,10);

block16=createSprite(630,750,350,10);

laptop=createSprite(280,300,20,20);

}

function draw() {
  background("aqua");
  
  image(bgImage,30,70,500,400);
  drawSprites();
  if(keyDown(UP_ARROW)){

  player.y=player.y-5;
  player.changeAnimation("walk",walkImg);

}

 if(keyDown(DOWN_ARROW)){

  player.y=player.y+5;
  player.changeAnimation("walk",walkImg);

}

 if(keyDown(RIGHT_ARROW)){

 player.x=player.x+5;

 player.changeAnimation("walk",walkImg);

 }

 if(keyDown(LEFT_ARROW)){

 player.x=player.x-5;

 player.changeAnimation("walk",walkImg);

 }
 if(keyWentUp(UP_ARROW)|| keyWentUp(DOWN_ARROW)|| keyWentUp(LEFT_ARROW)|| keyWentUp(RIGHT_ARROW)){

  player.changeImage("stand",standImg);


 }
 player.collide(block1);
 player.collide(block2);
 player.collide(block3);
 player.collide(block4);
 player.collide(block5);
 player.collide(block6);
 player.collide(block7);
 player.collide(block8);
 player.collide(block9);
 player.collide(block10);
 player.collide(block11);
 player.collide(block12);

if(laptop.isTouching(player)){
 if(lpCount===0){
  lpSwitch=createSprite(laptop.x+200,laptop.y+200,20,20);
  lpSwitch.shapeColor="red";

 }
   lpCount++; 
}

if(mousePressedOver(lpSwitch)){
  gameState="text";
  


}
 if(gameState==="text"){

  fill("blue");
  textSize(20);
 text("SCAN THE CARD",laptop.x,laptop.y+100);

 }
}