
var trex, trexAnime;


function preload(){
//load all media file
trexAnime = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}


function setup(){
//execute once
createCanvas(1200,600);

trex = createSprite(200,200);
trex.addAnimation("trexRunning", trexAnime);
trex.scale = 0.5;
}


function draw(){
//execute continuously
background("black");

drawSprites(); 
}


