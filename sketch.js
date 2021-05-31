var pikachu,charmander,squirtle;
var ground,groundImg;

function preload(){
  groundImg = loadAnimation("ground.jpg");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-1);

  pikachu = createSprite(displayWidth/4-190,displayHeight/4+270,50,90);
  charmander = createSprite(displayWidth/4 -250,displayHeight/4+270,50,80);
  squirtle = createSprite(displayWidth/4 -310,displayHeight/4+270,50,80);

  ground = createSprite(displayWidth*2/2,displayHeight/4+450,displayWidth*2-20,250);
  ground.velocityX = -2;
  ground.addAnimation("ground",groundImg);
  
}

function draw() {
  background(0); 

  if(ground.x<400){
    ground.x = ground.width/2;
  }

  if(keyDown(LEFT_ARROW)){
    pikachu.x = pikachu.x-4;
    charmander.x = charmander.x-4;
    squirtle.x=squirtle.x-4;
  }

  if(keyDown(RIGHT_ARROW)){
    pikachu.x = pikachu.x+4;
    charmander.x = charmander.x+4;
    squirtle.x=squirtle.x+4;
  }

  drawSprites();
}
