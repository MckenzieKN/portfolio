'use strict';

//create global vars here
var startT = 0;
var startX = 120;
var startY = 180;
var endX = 120;
var endY = 180;
var r = random(255);
var g = random(255);
var b = random(255);
var img;
//preload data if needed
function preload() {
    img = loadImage('data/wiz1.gif');
}

function setup() {
    createCanvas(300, 300);
    background(0);
    
    strokeWeight(4);
    image(img, 10,150,150,150);
}

function draw() {
    r = random(255);
    g = random(255);
    b = random(255);
    stroke(random(255), random(255), random(255));
    while(endX < 300){
        endX = startX + random(10);
        endY = startY +random(19)-9;
        line(startX, startY, endX, endY);
        startX = endX;
        startY = endY; 
    }
    var time = millis() - startT;
    if(time > 500){
     startT = millis();
        background(r,g,b);
        reset();
    }
}


function reset() {
    background(r,g,b);
    image(img, 10,150,150,150);
    startX = 120;
    startY = 180;
    endX = 120;
    endY = 180;
}



