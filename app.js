var socket = io();
let cnv;

cnv = document.getElementById("cnv");

function resizeCanvas() {
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

var ctx = cnv.getContext("2d");

socket.on('color', changeColor);

function changeColor(msg) {
  cnv.style.backgroundColor = msg;
  console.log(msg);
}

