var database;
var form,
  game,
  player,
  playerCount,
  bgimg;
var gameState = 0;

var bike1,
  bike2,
  bike3,
  bike4,
  bikes = [];

function preload() {
  bgimg = loadImage("images/background1.png");
  bike1img = loadImage("images/bike1.png");
  bike2img = loadImage("images/bike2.png");
  bike3img = loadImage("images/bike3.png");
  bike4img = loadImage("images/bike4.png");
  trackimg = loadImage("images/track.png");
}


function setup() {
  database = firebase.database();
  canvas = createCanvas(windowWidth, windowHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }

  //Write a condition to change gameState when 4 player joins




//Write a condition to call game.play() when gameState === 1
  


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
