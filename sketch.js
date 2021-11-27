var ball, ballImg;
var coin, coinImg;
var obstacle1, obstacle1Img;
var obstacle2, obstacle2Img;
var obstacle3, obstacle3Img;
var obstacle4, obstacle4Img;
var obstacle5; obstacle5Img;
var obstacle6; obstacle6Img;
var obstacle7; obstacle7Img;
var obstacle8; obstacle8Img;
var obstacle9, obstacle9Img;
var obstacle10, obstacle10Img;
var obstacle11, obstacle11Img;
var obstacle12, obstacle12Img;
var obstacle13, obstacle13Img;
var obstacle14, obstacle14Img;
var obstacle15, obstacle15Img;
var obstacle16, obstacle16Img;
var obstacle17, obstacle17Img;
var obstacle18, obstacle18Img;
var finish, finishImg;
var edges;
var score;
var lives;

function preload(){
  ballImg = loadImage("ball.png");
  coinImg = loadImage("coin.png");
  obstacle1Img = loadImage("obstacle1.png");
  obstacle2Img = loadImage("obstacle2.png");
  obstacle3Img = loadImage("obstacle3.png");
  obstacle4Img = loadImage("obstacle4.png");
  obstacle5Img = loadImage("obstacle5.png");
  obstacle6Img = loadImage("obstacle6.png");
  obstacle7Img = loadImage("obstacle7.png");
  obstacle8Img = loadImage("obstacle8.png");
  obstacle9Img = loadImage("obstacle9.png");
  obstacle10Img = loadImage("obstacle10.png");
  obstacle11Img = loadImage("obstacle11.png");
  obstacle12Img = loadImage("obstacle12.png");
  obstacle13Img = loadImage("obstacle13.png");
  obstacle14Img = loadImage("obstacle14.png");
  obstacle15Img = loadImage("obstacle15.png");
  obstacle16Img = loadImage("obstacle16.png");
  obstacle17Img = loadImage("obstacle17.png");
  obstacle18Img = loadImage("obstacle18.png");
  finishImg = loadImage("finish.png");
}

function setup() {
  createCanvas(1350,937);
  edges = createEdgeSprites();
  ball = createSprite(140,130,50,50);
  ball.addImage(ballImg);
  ball.scale = 0.37;
  coin = createSprite(900,200,50,50);
  coin.addImage(coinImg);
  score = 5;
  lives = 5;
  obstacle1 = createSprite(35,100,50,50);
  obstacle1.addImage(obstacle1Img);
  obstacle2 = createSprite(35,500,50,50);
  obstacle2.addImage(obstacle2Img);
  obstacle3 = createSprite(35,900,50,50);
  obstacle3.addImage(obstacle3Img);
  obstacle4 = createSprite(250,250,50,50);
  obstacle4.addImage(obstacle4Img);
  obstacle5 = createSprite(250,525,50,50);
  obstacle5.addImage(obstacle5Img);
  obstacle6 = createSprite(480,675,50,50);
  obstacle6.addImage(obstacle6Img);
  obstacle7 = createSprite(675,900,50,50);
  obstacle7.addImage(obstacle7Img);
  obstacle8 = createSprite(225,900,50,50);
  obstacle8.addImage(obstacle8Img);
  obstacle9 = createSprite(1125,900,50,50);
  obstacle9.addImage(obstacle9Img);
  obstacle10 = createSprite(225,35,50,50);
  obstacle10.addImage(obstacle10Img);
  obstacle11 = createSprite(675,35,50,50);
  obstacle11.addImage(obstacle11Img);
  obstacle12 = createSprite(1125,35,50,50);
  obstacle12.addImage(obstacle12Img);
  obstacle13 = createSprite(700,272,50,50);
  obstacle13.addImage(obstacle13Img);
  obstacle14 = createSprite(480,400,50,50);
  obstacle14.addImage(obstacle14Img);
  obstacle15 = createSprite(700,525,50,50);
  obstacle15.addImage(obstacle15Img);
  obstacle16 = createSprite(1122,730,50,50);
  obstacle16.addImage(obstacle16Img);
  obstacle17 = createSprite(1122,200,50,50);
  obstacle17.addImage(obstacle17Img);
  obstacle18 = createSprite(900,500,50,50);
  obstacle18.addImage(obstacle18Img);
  finish = createSprite(1255,460,50,50);
  finish.addImage(finishImg);
  finish.scale = 1.75;
}

function draw() {
  background("blue");
  fill("white"); 
  textSize(24); 
  text("score:" + score,1200,100);
  
  fill("white"); 
  textSize(24); 
  text("lives:" + lives,1200,130);

  ball.collide(edges);
  if(keyDown("DOWN_ARROW")){
    ball.y=ball.y+7;
  }
  if(keyDown("UP_ARROW")){
    ball.y=ball.y-7;
  }    
  if(keyDown("LEFT_ARROW")){
    ball.x=ball.x-7;
  }    
  if(keyDown("RIGHT_ARROW")){
    ball.x=ball.x+7;
  }    
  if (ball.isTouching(coin)){
    coin.destroy();
    score = score+5;
  }
  if (ball.isTouching(obstacle1)||ball.isTouching(obstacle2)||ball.isTouching(obstacle3)||ball.isTouching(obstacle4)||ball.isTouching(obstacle5)||ball.isTouching(obstacle6)||
  ball.isTouching(obstacle7)||ball.isTouching(obstacle8)||ball.isTouching(obstacle9)||ball.isTouching(obstacle10)||ball.isTouching(obstacle11)||ball.isTouching(obstacle12)||
  ball.isTouching(obstacle13)||ball.isTouching(obstacle14)||ball.isTouching(obstacle15)||ball.isTouching(obstacle16)||ball.isTouching(obstacle17)||ball.isTouching(obstacle18)){
    score = score-2;
    lives = lives-1;
    ball.x = 140;
    ball.y = 130;
  }
  if(score<=0||lives<=0){
    
  }
  drawSprites();
}