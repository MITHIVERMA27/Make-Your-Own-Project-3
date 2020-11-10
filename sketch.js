var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var fishes, fish1, fish2, fish3, fish4;

var aquarium, fish1_img, fish2_img, fish3_img, fish4_img;

function preload(){
  aquarium = loadImage("aqua.jpg");
  fish1_img = loadImage("blue.png");
  fish2_img = loadImage("red.png");
  fish3_img = loadImage("yellow.png");
  fish4_img = loadImage("green.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
