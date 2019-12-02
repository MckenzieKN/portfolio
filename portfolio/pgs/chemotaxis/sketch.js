'use strict';

var bact;
var b = false;
var a = false;

function setup() {
    createCanvas(700, 700);
    background(0);
    bact = new Array();
    for (var i = 0; i < 10; i++) {
        bact[i] = new Bacteria(0, 690);
    }
    fill('#3DAEF4');
    rect(40, 20, 100, 80, 20);
    fill(255);
    textSize(25);
    text("RESET", 50, 50);
    
}

function draw() {
    for (var i = 0; i < 10; i++) {
        if (!a) {
            bact[i].move(b);
            bact[i].show();
        }
    }
}

function mousePressed() {
    if (mouseX > 40 && mouseX < 140 && mouseY > 20 && mouseY < 100) {
        this.reset();
    }
}


function keyTyped() {
    if (key == 'k' || key == 'K'){
        console.log(b);
        if (b == false)
            b = true;
        else
            b = false;
    } else if (key == 'm' || key == 'M'){
        if (a == false)
            a = true;
        else
            a = false;
    }else if(key == 'n' || key == 'N') {
        var r = (Math.random() * 256);
        var g = (Math.random() * 256);
        var d = (Math.random() * 256);
        fill(r, g, d);
    }
}

function reset() {
    background(0);
    fill('#3DAEF4');
    rect(40, 20, 100, 80, 20);
    fill(255);
    textSize(25);
    text("RESET", 50, 50);
}


class Bacteria {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    move(b) {
        this.x += (Math.random() * 5) - 2;
        this.y += (Math.random() * 5) - 2;
        if (b === false) {
            if (mouseX > this.x) {
                this.x += (Math.random() * 6);
                
            }
            if (mouseX < this.x) {
                this.x += (Math.random() * -6);
           
            }
            if (mouseY > this.y) {
                this.y += (Math.random() * 6);
                
            }
            if (mouseY < this.y) {
                this.y += (Math.random() * -6);
            }
        } else if (b === true) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }
    show() {
        noStroke();
        ellipse(this.x, this.y, 10, 10);
    }
}
