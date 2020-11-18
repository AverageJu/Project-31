function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var divisionHeight=300;

  for(var k=0; k<=innerWidth; k=k+80){
    divisionHeight.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
}

    var particles = [];
    var division = [];
    var plinkos = [];

function draw() {
  background(255,255,255);  
  drawSprites();


}