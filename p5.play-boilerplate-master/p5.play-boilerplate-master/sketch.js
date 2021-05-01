

function setup(){
  createCanvas(800,500);
Pac_Man = createSprite(15,15);
c1 = createSprite(60,10,15,85);
c2 = createSprite(30,100,70,15);
c3 = createSprite(110,90,15,130);
c4 = createSprite(60,210,224,15);
c5 = createSprite(165,50,15,100);
c6 = createSprite(165,180,15,60);
c7 = createSprite(28,270,55,15);
c8 = createSprite(82,155,70,15);
c9 = createSprite(213,95,15,115);
c10 = createSprite(189,150,63,15);
c11 = createSprite(265,92,15,215);
c12 = createSprite(248,206,50,15);
c13 = createSprite(220,273,15,150);
c14 = createSprite(165,270,125,15);
c15 = createSprite(100,330,120,15);
c16 = createSprite(90,365,15,70);
c17 = createSprite(285,335,15,125);
c18 = createSprite(315,360,50,15);
c19 = createSprite(345,218,15,300);
c20 = createSprite(285,206,30,15);
c21 = createSprite(332,125,40,15);
c22 = createSprite(290,25,40,15);
}

function draw(){
  background("black");
  Pac_Man.shapeColor = "pink";
  
  if (keyDown(UP_ARROW)) {
  Pac_Man.velocityX = 0;
  Pac_Man.velocityY = -2;
}
if (keyDown(DOWN_ARROW)) {
  Pac_Man.velocityX = 0;
  Pac_Man.velocityY = 2;
}
if (keyDown(RIGHT_ARROW)) {
  Pac_Man.velocityX = 2;
  Pac_Man.velocityY = 0;
}
if (keyDown(LEFT_ARROW)) {
  Pac_Man.velocityX = -2;
  Pac_Man.velocityY = 0;
}
stroke("skyblue");
fill("black");
strokeWeight(3);


  
  createEdgeSprites();
  Pac_Man.bounceOff(edges);
  Pac_Man.bounceOff(c1||c2||c3||c4||c5||c6||c7||c8||c9||c10||c11||c12||c13||c14||c15||c16||c17||c18||c19||c20||c21||c22);
  Pac_Man.bounceOff(c2);
  Pac_Man.bounceOff(c3);
  Pac_Man.bounceOff(c4);
  Pac_Man.bounceOff(c5);
  Pac_Man.bounceOff(c6);
  Pac_Man.bounceOff(c7);
  Pac_Man.bounceOff(c8);
  Pac_Man.bounceOff(c9);
  Pac_Man.bounceOff(c10);
  Pac_Man.bounceOff(c11);
  Pac_Man.bounceOff(c12);
  Pac_Man.bounceOff(c13);
  Pac_Man.bounceOff(c14);
  Pac_Man.bounceOff(c15);
  Pac_Man.bounceOff(c16);
  Pac_Man.bounceOff(c17);
  Pac_Man.bounceOff(c18);
  Pac_Man.bounceOff(c19);
  Pac_Man.bounceOff(c20);
  Pac_Man.bounceOff(c21);
  Pac_Man.bounceOff(c22);
  
  if (Pac_Man.collide(trophy)){
    fill("green");
    textSize(30);
    text("You Win",150,200);
  }
  
  drawSprites();
}
