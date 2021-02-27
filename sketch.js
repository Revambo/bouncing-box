var canvas;
var music;
var redp
var purp
var grep
var blup
var box
var barr1
var barr2
var barr3

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     blup = createSprite(100,600,200,200)
     redp = createSprite(300,600, 200, 200)
     grep = createSprite(500,600,200,200)
     purp = createSprite(700,600,200,200)
     
     barr1 = createSprite(0,300, 1, 600)
     barr2 = createSprite(400, 0, 800, 1)
     barr3 = createSprite(800, 300, 1, 600)


    //create box sprite and give velocity
    box = createSprite(400, 300, 50, 50)
    box.velocityX = -5
    box.velocityY = 5
  

}

function draw() {
    background(rgb(169,169,169));
    blup.shapeColor = "blue"
    redp.shapeColor = "red"
    grep.shapeColor = "green"
    purp.shapeColor = "purple"
    //create edgeSprite
      



    //add condition to check if box touching surface and make it box
  if(box.isTouching(purp)){
    box.shapeColor = "purple"
  }
  
  if(box.isTouching(grep)){
    box.shapeColor = "green"
  }
  
  if(box.isTouching(redp)){
    box.shapeColor = "red"
  }
  
  if(box.isTouching(blup)){
    box.shapeColor = "blue"
  }
  
   box.bounceOff(purp)
   box.bounceOff(grep)
   box.bounceOff(redp)
   box.bounceOff(blup)
  
   box.bounceOff(barr1)
   box.bounceOff(barr2)
   box.bounceOff(barr3)
  
  music.play();



  
 drawSprites()
}
