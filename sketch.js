var grassImg;

function preload(){
grassImg=loadImage("images/grass.png");
zombieImg=loadImage("images/zombie.png")  ;


}
  function setup() {
  createCanvas(1500,700);

  
  
  
  bar1=new Bar(350,250,20,600);
  bar2=new Bar(470,580,20,150);
  bar3=new Bar(650,10,600,20);
  bar4=new Bar(850,650,790,20);
  bar5=new Bar(400,400,100,20);
  bar6=new Bar(510,500,100,20);
  bar7=new Bar(550,400,20,200);
  bar8=new Bar (500,300,120,20);
  bar9=new Bar(450,230,20,150);
  bar10=new Bar (535,150,190,20);
  bar11=new Bar(640,290,20,300);
  bar12=new Bar(670,430,80,20);
  bar14=new Bar(500,40,20,50);
  bar13=new Bar(640,120,20,50);
  bar14=new Bar(790,290,20,550);
  bar15=new Bar(630,610,20,70);
  bar16=new Bar(755,300,50,20);
  bar17=new Bar(830,450,80,20);
  bar18=new Bar(950,500,20,300);
  bar19=new Bar(950,180,20,150);
  bar20=new Bar(910,180,70,20);
  bar21=new Bar(1000,220,120,20);
  bar22=new Bar(1070,280,20,550);
  bar23=new Bar(1230,320,20,650);
  bar24=new Bar(1200,100,80,20);
  bar25=new Bar(1100,400,80,20);


  zombie=createSprite(250,600,10,10);
	zombie.addImage(zombieImg);
	zombie.scale=0.3;

  


  
  }
  function draw() {
  background("lightblue");  

  /*
  zombie.collide(bar1);
  zombie.collide(bar2);
  zombie.collide(bar3);
  zombie.collide(bar4);

  zombie.collide(bar5);
  zombie.collide(bar6);
  zombie.collide(bar7);
  zombie.collide(bar8);
  zombie.collide(bar9);
  zombie.collide(bar10);
  zombie.collide(bar11);
  zombie.collide(bar12);
  zombie.collide(bar13);
  zombie.collide(bar14);

  zombie.collide(bar15);
  zombie.collide(bar16);
  zombie.collide(bar17);
  zombie.collide(bar18);
  zombie.collide(bar19);
  zombie.collide(bar20);
  zombie.collide(bar21);
  zombie.collide(bar22);
  zombie.collide(bar23);
  zombie.collide(bar24);
  zombie.collide(bar25);

  */


  

  if(keyCode===LEFT_ARROW){
    zombie.x-=2;
  }

  
  if(keyCode===UP_ARROW){
    zombie.y-=2;
  }

  
  if(keyCode===RIGHT_ARROW){
    zombie.x+=2;
  }

  
  if(keyCode===DOWN_ARROW){
    zombie.y+=2;
  }

  
  
  drawSprites();
}