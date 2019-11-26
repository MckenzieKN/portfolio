'use strict';

var stars=new Array();
var stars1=new Array();
var l;
var count = 0;

function setup(){
  createCanvas(1000, 500);
  background(0);
  l = new Letters();
  for(var v1 = 0; v1 < 4; v1++){
     stars1[v1] = new OddballParticle(190, 260,190, 500);
  }
  for(var v2 = 4;v2 < 8; v2++){
    stars1[v2] = new OddballParticle(300, 400,300, 950);
  }
  for(var v3 = 0; v3 < 1000; v3++){
    stars[v3] = new NormalParticle(width/2, height/2, 5);
  }
}

function draw(){
  background(0);
  for(var v4 = 0; v4 < 1000; v4++){
    stars[v4].move();
    stars[v4].show();
  }
  for(var v5 = 0; v5 < 8; v5++){
   stars1[v5].move();
   stars1[v5].show();
  }
  count+=1000;
  l.name(count);
}

function mousePressed(){
    count = 0;
    background(0);
}



class Letters {
    
  constructor(){
    this.counter = 0;
    
  }
    getCounter(){
        return this.counter;
    }
  
  name(co){
    this.counter = co/500;
    strokeWeight(0);
    fill('#0367A6');
    this.k(200,150);
    this.k2(250,150);
    this.k3(200,180);
    this.k4(240,190);
    this.a();
    this.a2();
    this.t();
    this.t2();
    this.e(470,150);
    this.e2(470,150, 190, 230);
    this.m();
    this.m2();
    this.cc();
    this.cc2();
    this.k(490,270);
    this.k2(540,270);
    this.k3(490,300);
    this.k4(530, 310);
    this.e(570 ,270);
    this.e2(570, 270, 310, 350);
    this.n();
    this.n2();
    this.z();
    this.z2();
    this.i();
    this.i2();
    this.e(880,270);
    this.e2(880,270, 310,350);
    
  }
  
    k(xk,yk){
    if(this.counter < 100)
      rect(xk,yk,20,this.counter,20);
    else
     rect(xk,yk,20,100,20);
    
  }
  
 k2(xk2,yk2){
    if(this.counter < 50){
      rect(xk2,yk2,20,this.counter,20);
    } else 
      rect(xk2,yk2,20,50,20);
  }
  
 k3(xk3,yk3){
    if(this.counter < 60){
      rect(xk3,yk3,this.counter,20,20);
    } else 
      rect(xk3,yk3,60,20,20);
  }
  
  k4(xk4,yk4){
    if(this.counter < 60){
      rect(xk4,yk4,20,this.counter,20);
    } else 
      rect(xk4,yk4,20,60,20);
  }
  
   a(){
   if(this.counter < 100){
      rect(290,150,20,this.counter,20);
      rect(330,150,20,this.counter,20);
   }else{
     rect(290,150,20,100,20);
     rect(330,150,20,100,20);
    }
  }
  
  a2(){
   if(this.counter < 45){
      rect(290,150,this.counter,20,20);
      rect(290,190,this.counter,20,20);
   }else{
     rect(290,150,45,20,20);
     rect(290,190,45,20,20);
    }
  }
  
  t(){
   if(this.counter < 100){
     rect(410,150,20,this.counter,20);
   } else 
     rect(410,150,20,100,20);
  }
  
   t2(){
   if(this.counter < 100){
     rect(370,150,this.counter,20,20);
   } else 
     rect(370,150,100,20,20);
  }
  
  e(xe, ye){
    if(this.counter < 100)
      rect(xe,ye,20,this.counter,20);
    else
      rect(xe,ye,20,100,20);
  } 
  
  e2 (xe2,  ye2,  ye3, ye4){
   if(this.counter < 50){
    rect(xe2,ye2,this.counter,20,20);
    rect(xe2,ye3,this.counter,20,20);
    rect(xe2,ye4,this.counter,20,20);
   } else {
     rect(xe2,ye2,50,20,20);
     rect(xe2,ye3,50,20,20);
     rect(xe2,ye4,50,20,20);
   }
  }
  
   m(){
    if(this.counter < 100){
     rect(300,270, 20, this.counter,20);
     rect(340,270, 20, this.counter,20);
     rect(380,270, 20, this.counter,20);
    } else {
      rect(300,270, 20, 100,20);
     rect(340,270, 20, 100,20);
     rect(380,270, 20, 100,20);
    }
  }
  
   m2(){
    if(this.counter<85)
      rect(300,270,this.counter,20,20);
    else 
      rect(300,270,85,20,20);
  }
  
   cc(){
   if(this.counter < 100)
     rect(420, 270,20, this.counter, 20);
   else
     rect(420,270,20,100,20);
  }
  
   cc2(){
    if(this.counter < 50){
     rect(420,270,this.counter, 20,20);
     rect(420,350,this.counter,20,20);
    } else {
      rect(420,270,50, 20,20);
     rect(420,350,50,20,20);
    }
  }
  
   n(){
    if(this.counter < 100){
     rect(640, 270, 20, this.counter, 20);
     rect(700, 280, 20, this.counter, 20);
    } else {
      rect(640, 270, 20, 100, 20);
      rect(700, 270, 20, 100, 20);
    }
  }
  
   n2(){
    if(this.counter < 65)
     rect(640, 280,this.counter, 20, 20);
    else 
      rect(640,280,65,20,20);
  }
  
   z(){
   if(this.counter < 60){
    rect(730, 270, this.counter, 20,20);
    rect(730, 360, this.counter, 20,20);
   } else {
     rect(730, 270, 60, 20,20);
    rect(730, 360, 60, 20,20);
   }
  }
  
   z2(){
   if(this.counter < 30)
     rect(770,270, 20, this.counter, 20);
    else if (this.counter< 60){
      rect(770,270, 20, 40, 20);
      rect(750,310, 20, this.counter, 20);
    } else {
      rect(770,270, 20, 40, 20);
      rect(750, 310, 20, 40, 20);
      rect(730, 350, 20, 20, 20);
    } 
}

   i(){
   if(this.counter< 100)
     rect(820, 270,20, this.counter, 20);
   else
     rect(820,270,20,100,20);
  }
  
  i2(){
   if(this.counter <60){
    rect(800,270,this.counter, 20,20);
    rect(800,360, this.counter,20,20);
   } else {
     rect(800,270,60, 20,20);
     rect(800,360,60,20,20);
   }
  }
}


class NormalParticle {

   constructor(xn, yn, s1){
     this.xPos = xn;
     this.yPos = yn;
     this.size1 = s1;
     this.size2 = s1;
     this.speed = (Math.random()*5);
     this.angle = (Math.PI*2*Math.random());
     
   }
   
   
   move(){
     this.xPos+=(Math.cos(this.angle)*this.speed);
     this.yPos+=(Math.sin(this.angle)*this.speed);
   }

   show(){
     strokeWeight(0);
     fill((Math.random()*50),(Math.random()*175),(Math.random()*200));
     ellipse(this.xPos, this.yPos, this.size1,this.size2);
   }
}


class OddballParticle 
{
  constructor( xg,  yg, p, p2){
    this.xo = xg;
    this.yo = yg;
    this.para1 = p;
    this.para2 = p2;
    this.speed = (Math.random()*5)+1;
  }
  
  move(){
    this.xo += this.speed;
    if(this.xo > this.para2){
      this.speed*=-1;
    } else if(this.xo < this.para1){
      this.speed*=-1;
    }
  }
  
  show(){
    if(this.speed < 0){
     fill('#91DB80'); 
    } else
     fill('#3DAEF4');
    ellipse(this.xo, this.yo, 10,10);
  }

}




  