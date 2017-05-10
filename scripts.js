/**
 * Created by mephisto on 5/9/17.
 */
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

/*context.moveTo(100, 100);
context.lineTo(200, 200);
context.lineTo(300, 100);
context.lineTo(100, 200);
context.lineTo(300, 150);
context.lineTo(100, 100);
context.strokeStyle = "#ff0000";


context.stroke();

context.beginPath();
context.fillStyle = "#FFFF00";
context.arc(250,250,20,0,2*Math.PI);*/

/*
context.fill();
context.stroke();*/

var x = 200;
var y = 200;
var r = 50;
var xDirection = 1;
var yDirection = 1;
var n = 1;

function drawBall() {
    context.fillStyle = "#FF0000";
    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI);
    context.clearRect(0,0,500,500);
    context.fill();


    if((x > 500-r) || (x < r)){
        xDirection = -xDirection;
    }
    if((y > 500 - r)|| (y < r)){
        yDirection = -yDirection;
    }


    x += 4*xDirection;
    y += 3*yDirection;
    //console.log(x,y);
}


var ball = setInterval(drawBall, 20);



console.log(n);

canvas.addEventListener("click", function(event){
    //console.log(event);

    if(Math.sqrt(Math.pow((event.layerY - y), 2) + Math.pow((event.layerX - x) ,2)) < 2*r){
        console.log("circle hit");
        n++;
        x += n*xDirection;
        y += n*yDirection;
        ball = setInterval(drawBall, 20);
    }else{
        console.log('missed');



    }


});




