var socket = io();
let input;

input = document.getElementById("input");

function sendColor() {
  socket.emit('color', input.value);
}
//create new array of colors
let colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF"];
let colorIndex = 0;
let interval;

function rainBowMode() {
    //check if the interval is running
    if (interval) {
        clearInterval(interval);
        interval = null;
    } else {
        console.log("rainbow mode");
        interval = setInterval(function() {
            console.log(colors[colorIndex]);
            socket.emit('color', colors[colorIndex]);
            colorIndex++;
            if (colorIndex >= colors.length) {
                colorIndex = 0;
            }
        }, 1000);
    }

} 