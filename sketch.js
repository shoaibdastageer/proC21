
var astronaut;


function preload(){
 bgImg = loadImage("images/iss.png");
 sleepImg = loadImage("images/sleep.png");
 brushImg = loadImage("images/brush.png");
 gymImg = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
 eatImg = loadAnimation("images/eat1.png","images/eat2.png");
 drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
 moveImg = loadAnimation("images/move.png","images/move1.png");
 bathImg = loadAnimation("images/bath1.png","images/bath2.png")

}


function setup() {
  createCanvas(800,500);
 
 background1 = createSprite(400,250,40,40);
 background1.addImage(bgImg);
 background1.scale = 0.2;

 astronaut = createSprite(400,350,20,20);
 astronaut.addImage(sleepImg);
 astronaut.scale=0.1;



}

function draw() {
  background("red");
  


  astronaut.setVelocityX=0;
  astronaut.setVelocityY=0;

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brushImg);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymImg);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
  
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("bathing",bathImg);
      astronaut.changeAnimation("bathing");
      astronaut.y=350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      }

      if(keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("eating",eatImg);
        astronaut.changeAnimation("eating");
        astronaut.y=350;
        astronaut.velocityX=0;
        astronaut.velocityY=0;
        }

      if(keyDown("m")){
        astronaut.velocityX=2
      }
      if(keyDown("n")){
        astronaut.velocityX=-2
      }


      

      
 drawSprites();
 textSize(20);
  fill('red');
  text("Instructions :",50,50)
  text("Up arrow : Brushing",50,70)
  text("Down arrow : Gymming",50,90)
  text("left arrow : Eating",50,110)
  text("Right arrow : Bathing",50,130)
  text("m : moves right side",50,150)
  text("n : moves left side",50,170)
}