var canvas;
var gameState = 0;
var playerCount;
var database;
var form;
var player;
var game;
var allPlayers;

function setup(){
  canvas =createCanvas(800,400);
  database = firebase.database();
}

function draw(){
  if(playerCount == 4){
    game.update();
  }
  if(gameState == 1){
    game.play();
  }
  
}
