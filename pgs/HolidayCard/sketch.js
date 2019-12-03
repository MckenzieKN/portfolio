'use strict';

var s = new Array();
var r = new Array();
var h;
var precip=true;
function setup(){
  createCanvas(1000, 400);
  h = new Houses();
  for(var i1 = 0; i1 < 700; i1++){
    s[i1] = new SnowFlakes();
  }
  for(var i2 = 0; i2 < 400; i2++){
    r[i2] = new Rain();
  }
  showCurve();
}

function draw(){
  background(0);
  strokeWeight(0);
  if(precip == true){
    for (var i3 = 0; i3< 700; i3++){
      s[i3].move();
      s[i3].show();
    }
  } else if(precip == false){
    for(var i4=0; i4< 400;i4++){
     r[i4].move1();
     r[i4].show1();
    }
  }
  fill(255);
  h.makeHouse();
  h.lights();
  showCurve();
  makeText();
  temp();
}

 function makeText(){
    fill('#49B1F2');
    text("Happy Holidays!", 700, 370);
  }

function temp(){
  fill(0);
  rect(50,345,100,35,20);
  rect(175, 345, 100,35,20);
  fill(255);
  textSize(20);
  text("Snow", 75,370);
  text("Rain", 206,370);
}


function mousePressed(){
  if(mouseX < 150 && mouseX > 50 && mouseY > 345 && mouseY < 380){
   console.log("Snow"); 
   precip = true;
  } 
  if(mouseX < 275 && mouseX > 175 && mouseY > 345 && mouseY < 380){
   console.log("Rain"); 
   precip = false;
  } 
}


function showCurve(){
  fill(255);
  strokeWeight(0);
  beginShape();
  curveVertex(0, 300); // the first control point
  curveVertex(0, 300); // is also the start point of curve
  curveVertex(250, 250);
  curveVertex(600, 400);
  curveVertex(600, 400);
  curveVertex(600, 400);
  endShape();
  
  beginShape();
  curveVertex(600, 400);
  curveVertex(600, 400);
  curveVertex(750, 300);
  curveVertex(1000,350);
  curveVertex(1000,350);
  curveVertex(1000,350);
  endShape();
    
  quad(0, 299, 600, 399, 600, 500, 0, 500);
  
  quad(0, 500, 1000, 500, 1000, 349, 600, 399);
}


class Houses{
    
  constructor(){} 
  
 makeHouse(){
   fill('#c2b280');
   rect(200,190,65,65);
   rect(310,230,65,65);
   fill('#654321');
   triangle(190,190, 230,140,275, 190);
   triangle(300,240, 340,180,385, 240);
 }
 
 lights(){
   for(var i5 = 0; i5 < 11; i5++){
     fill((Math.random()*256), (Math.random()*256),(Math.random()*256));
     ellipse(200+i5*7,190,5,5);
   }
   for(var i6 = 0; i6 < 11; i6++){
     fill((Math.random()*256), (Math.random()*256),(Math.random()*256));
     ellipse(300+i6*8,240,5,5);
   }
 }
  
}

 class Rain {
  constructor(){
    this.xPos = (Math.random()*width);
    this.yPos = ((Math.random()*400)) -400;
    this.velocity = (Math.random()*3)+2;
  }
  
  move1(){
    this.yPos+=this.velocity;
    if(this.yPos>height){
      this.yPos=0;
    }
  }
  
  show1(){
    fill(153,204,255);
    strokeWeight(0);
    ellipse(this.xPos, this.yPos, 2, 10);
  }
  
}

class SnowFlakes {
  
  constructor (){
    this.xloc = Math.random()*width;
    this.yloc = (Math.random()*200) -200;
    this.speedY = (Math.random()*3)-2;
    this.speedX = (Math.random()*3)-2;
    this.size = Math.random()*5;
    this.vel = 0.01;

  }
  
  move(){
    if(this.xloc>width+20) {
      this.xloc = width *10;
      this.speedX *= -1;      
      
    }
    if(this.xloc < -20){
      this.xloc = -20;
      this.speedX *= -1;
    }
    
    if(this.yloc > height && this.speedY > 5){
      this.yloc = -5;
      this.speedY = 4;
    } else {
      this.speedY += this.vel;
      this.yloc += this.speedY;
      this.xloc += this.speedX;
    }
    
    
   } 
   
   show(){
     fill(255);
     strokeWeight(0);
     ellipse(this.xloc,this.yloc, this.size, this.size);
    }
}


