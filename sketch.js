var canvas
var bike1, bike2, bike3, bike4, track;
var dirt, rocks, bikeImg, fuelImage;
var allPlayers, bgImg, hill, database;
var powerCoin, crops, gameState;
var hurdles, lifeImage, obstacles;
var obstacle1Image, obstacle2Image, fuelImage, player, playerCount;

function preload(){
bgImg = loadImage("assets/bg.png");
bike = loadAnimation("assets/bike1.png","assets/bike2.png","assets/bike3.png","assets/bike4.png");
track = loadImage("assets/track.png");
dirt = loadImage("assets/dirt.png");
rocks = loadImage("assets/rock.png");
powerCoin = loadImage("assets/coin.png");
hurdles = loadImage("assets/hurdle.png");
fuelImage = loadImage("assets/fuel.png");
hill = loadImage("assets/hill.png");
crops = loadImage("assets/crop.png");
obstacle1Image = loadImage("assets/obstacle1.png");
obstacle2Image = loadImage("assets/obstacle2.png");
}

function setup(){

//background image
bg = createSprite(200,100,200,10);
bg.addImage(bgImg);
bg.scale = 1.3

//creating bike
bike = createSprite(10,20,40,20);
bike.addAnimation("bike",bikeImg);
bike.scale = 0.5

canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
	background(backgroundImage);
	if (playerCount === 4) {
	  game.update(1);
	}
  
	if (gameState === 1) {
	  game.play();
	}
  
	if (gameState === 2) {
	  game.showLeaderboard();
	  game.end();
	}
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  

var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}