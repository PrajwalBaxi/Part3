var canvas, bIg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4,car1_img,car2_img,car3_img,car4_img,hurdle;
var bmig;

//var count = 0

function preload(){
  bIg = loadImage("images/track.jpg");
  car1_img = loadImage("images/run.png");
  car2_img = loadImage("images/run.png");
  car3_img = loadImage("images/run.png");
  car4_img = loadImage("images/run.png");
  hurdle = loadImage("images/download.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(bIg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    end();
  }
}
