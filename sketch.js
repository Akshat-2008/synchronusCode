var form,player,game;

var gameState=0;
var playerCount;
var database;

function setup(){
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
}
function draw(){

}