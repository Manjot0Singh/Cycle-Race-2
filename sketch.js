      var path,mainCyclist;
      var pathImg,mainRacerImg1,mainRacerImg2;

      var pinkRacer,orangeRacer,redRacer;
      var pinkRacerimg,orangeRacerimg,redRacerimg;
      var pinkRacerG,orangeRacerG,redRacerG;

      var obstacle1,obstacle2,obstacle3;
      var obstacle1img,obstacle2img,obstacle3img;
      var obstacle1G,obstacle1G,obstacle3G;

      var END =0;
      var PLAY =1;
      var gameState = PLAY;

      var distance=0;
      var gameover,gameoverImg;

    function preload(){
      pathImg = loadImage("images/Road.png");
                              mainRacerImg1=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
      mainRacerImg2= loadAnimation("images/mainPlayer3.png");

      pinkRacerimg = loadAnimation("opponent1.png","opponent2.png");
      orangeRacerimg = loadAnimation("opponent4.png","opponent5.png");
      redRacerimg = loadAnimation("opponent7.png","opponent8.png");
gameoverImg = loadImage("images/gameOver.png");
   }

  function setup(){

pinkRacerG = new Group();
orangeRacerG = new Group();
redRacerG = new Group(); 
    

  createCanvas(700,300);

// Moving background
  path=createSprite(camera.position.x,150);
  path.addImage(pathImg);
  path.velocityX = -5;
  path.scale = 0.5

  //creating boy running
  mainCyclist  = createSprite(70,150,20,20);
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  mainCyclist.scale=0.07;
  
       
  mainCyclist.setCollider("circle",0,0,600);
  mainCyclist.debug = false;
    
  gameover = createSprite(300,100);
  gameover.addImage(gameoverImg);
  gameover.scale = 0.5; 
    gameover.visible = false;
    
    
  }

function draw() {
  background(0);
 
  if(gameState===PLAY){
        
  distance = distance +Math.round(getFrameRate()/60);
 

   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 10 ){
    path.x = width/2;
  }
    speed();
  
}
  if(gameState===END){
 
    gameover.visible = true;
    
     path.velocityX = 0;
    pinkRacerG.velocityX = 0;
    orangeRacerG.velocityX = 0;
    redRacerG.velocityX = 0;
    
    pinkRacerG.destroyEach();
    orangeRacerG.destroyEach();
    redRacerG.destroyEach();
    mainCyclist.destroy();
    
     if(keyDown(UP_ARROW)){
     reset();
     }
     }
   
   end();
   ran(); 
  
  drawSprites();
  
  }

function ran() {
  
 if(frameCount % 200===0) { 
  pinkRacer = createSprite(710,camera.position.y,10,10);
  pinkRacer.y = Math.round(random(50,250));
  pinkRacer.addAnimation("pinkracer_racing",pinkRacerimg);
  pinkRacer.scale=0.06;
  pinkRacer.velocityX = -3;
   pinkRacerG.add(pinkRacer);
  }
  
  
  if(frameCount % 400===0) { 
  orangeRacer = createSprite(800,camera.position.y,10,10);
  orangeRacer.y = Math.round(random(50,250));
  orangeRacer.addAnimation("orangeracer_racing",orangeRacerimg);
  orangeRacer.scale=0.06;
  orangeRacer.velocityX = -2;
    orangeRacerG.add(orangeRacer);
  }
  
  
  if(frameCount % 600===0) { 
  redRacer = createSprite(900,camera.position.y,10,10);
  redRacer.y = Math.round(random(50,250));
  redRacer.addAnimation("redRacer_racing",redRacerimg);
  redRacer.scale=0.06;
  redRacer.velocityX = -1;
   redRacerG.add(redRacer);
  }
  
}

function end()
{
  
    if(pinkRacerG.isTouching(mainCyclist)
       ||orangeRacerG.isTouching(mainCyclist)
       ||redRacerG.isTouching(mainCyclist))
      {
      gameState = END;
        
      }
}

    function reset(){
      gameState = PLAY;

      path.velocityX = -5;
      pinkRacerG.destroyEach();
      orangeRacerG.destroyEach();
      redRacerG.destroyEach();
      
      distance = 0;
    }

    function speed()
    {
    path.velocityX = -(6 + 2*distance/150); 
    pinkRacerG.velocityX = -(6 + 2*distance/150); 
    orangeRacerG.velocityX = -(6 + 2*distance/150);   
    redRacerG.velocityX = -(6 + 2*distance/150);   
    }




