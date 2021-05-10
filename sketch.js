var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("stadium.png")
  //load image for the treasure background
  bg2=loadImage('players.jpg')
  
}

function setup() {
  createCanvas(1200,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  
  
if(score===3){
  clear();
  background(bg2);
 
}
  

  
  drawSprites()
}