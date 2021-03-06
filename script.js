/**
 * Created by mephisto on 5/10/17.
 */
var canvas = document.getElementById("canvas");
console.dir(canvas);
//console.dir(window;)

var context = canvas.getContext("2d");
var mousePosition = {};
var lastMousePosition = null;
var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
var mouseDown = false;
console.dir(colorPicker);

colorPicker.addEventListener('change', function(event){
    //console.log(event);
    color = colorPicker.value;
    //color = event.target.value;
    console.log(color);
});

thicknessPicker.addEventListener('change', function(event){
    //console.log(event);
    thickness = thicknessPicker.value;
    //console.log(thickness);
});

canvas.addEventListener('mousedown', function(event){
    mouseDown = true;
});


canvas.addEventListener('mouseup', function(event){
    mouseDown = false;
    lastMousePosition = null;
});

canvas.addEventListener('mousemove', function(event){
    if(mouseDown){
        //console.log(event);
        //console.log('mouse down + movement')
        if(lastMousePosition === null){
            lastMousePosition = {x: event.offsetX, y: event.offsetY}
        }
        mousePosition.x = event.offsetX;
        mousePosition.y = event.offsetY;
        //console.log(mousePosition.x);
        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineWidth = thickness;
        context.beginPath();
        context.moveTo(lastMousePosition.x, lastMousePosition.y);
        context.lineTo(mousePosition.x, mousePosition.y);
        context.stroke();
        context.closePath();

        lastMousePosition = {x: mousePosition.x, y: mousePosition.y}

    }
});

var startTime = new Date();
//console.log(startTime);

var secondsPaused = 0;

var paused = false;


function pause(){
    paused = !paused;
    console.log(paused);
}

/*setInterval(function(){
    if(paused) {
        secondsPaused++;
        console.log(secondsPaused);
    }
}, 1000);*/



console.log(secondsPaused);
setInterval(
    function () {

        if(!paused) {
            var currentTime = new Date;
            var totalSeconds = (Date.parse(currentTime) - Date.parse(startTime)) / 1000;
            totalSeconds = totalSeconds - secondsPaused;
            //console.log(totalSeconds);
            var minutes = Math.floor(totalSeconds / 60 % 60);
            //console.log(minutes);
            var hours = Math.floor(totalSeconds / 60 / 60 % 24);
            //console.log(hours);
            var seconds = Math.floor(totalSeconds % 60);
            //console.log(seconds);
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;

        }else{
            secondsPaused++;
        }
    }, 1000
);





