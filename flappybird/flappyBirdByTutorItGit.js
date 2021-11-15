let canvs = document.querySelector(".canvas");
let ctx = canvs.getContext("2d");

let bird = new Image ();
let background = new Image ();
let fg = new Image ();
let pipeNorth = new Image ();
let pipesputh = new Image ();

bird.src = "img/bird.png";
background.src = "img/pipes.jpg";
fg.src = "img/Screenshot_1.jpg";
pipeNorth.src = "img/flappy-bird-pipe-transparent-11549930651hqzkrjyfcl.png";
pipesputh.src = "img/Screenshot_2.jpg";

var gap = 85 ;
var constant ;
var bX = 10 ;
var bY = 156;
var gravity = 1.5 ;
var score = 0;

var fly = new Audio();
var scor = new Audio();

fly.src = "audio/wing.mp3";
scor.src = "audio/point.mp3";

document.addEventListener("keydown", moveUp );

function moveUp (){
    bY-= 25;
    fly.play();
}

var pipe = [];


pipe [0] = {
    x : canvs.width,
    y : 0
}
