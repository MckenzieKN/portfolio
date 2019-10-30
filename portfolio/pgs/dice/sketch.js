'use strict';
Show s;

//preload data if needed
function preload() {
}

function setup() {
    createCanvas(600, 700);
    background(0);
    textSize(10);
    strokeWeight(10);
    s = new Show();
    text("Each 6 is worth +20. All other numbers will be negative", 10,600);
    fill(4BA4AB);
    rect(100,620,400,630);
}

function draw() {

}


function reset() {
   
}


class Die{
  var value;
  var x;
  var y;
  var total;
  
  function preload(){
      
  }
  
  public Die(int x, int y){
    this.x = x;
    this.y = y;
    fill(4BA4AB);
    stroke(0);
    rect(x,y, 75,75,20);
  }
  
  //will put the new values on the dice
  void showValues(){
    changeValue();
     if(value == 1){
       total -= 1;
       fill(255);
       stroke(0);
       rect(x,y,75,75,20);
       fill(4BA4AB);
       noStroke();
       ellipse(x+37, y+37, 10,10);
     } else if (value == 2){
       total -= 2;
       fill(255);
       stroke(0);
       rect(x,y, 75,75,20);
       fill(4BA4AB);
       noStroke();
       ellipse(x+37,y+25, 10,10);
       ellipse(x+37, y+50, 10,10);
     } else if(value == 3){
       total -= 3;
       fill(255);
       stroke(0);
       rect(x,y, 75,75,20);
       fill(4BA4AB);
       noStroke();
       ellipse(x+37,y+20, 10,10);
       ellipse(x+37, y+35, 10,10);
       ellipse(x+37, y+50, 10,10);
     } else if(value ==4){
       total -= 4;
       fill(255);
       stroke(0);
       rect(x,y, 75,75,20);
       fill(4BA4AB);
       noStroke();
       ellipse(x+24,y+23, 10,10);
       ellipse(x+24, y+56, 10,10);
       ellipse(x+56, y+23, 10,10);
       ellipse(x+56, y+56, 10,10);
     } else if(value == 5){
       total -= 5;
       fill(255);
       stroke(0);
       rect(x,y, 75,75,20);
       fill(4BA4AB);
       noStroke();
       ellipse(x+24,y+23, 10,10);
       ellipse(x+24, y+56, 10,10);
       ellipse(x+56, y+23, 10,10);
       ellipse(x+56, y+56, 10,10);
       ellipse(x+37,y+37,10,10);
     } else {
       total+=20;
       fill(4BA4AB);
       stroke(0);
       rect(x,y, 75,75,20);
       fill(0);
       noStroke();
       ellipse(x+23,y+20, 10,10);
       ellipse(x+23, y+35, 10,10);
       ellipse(x+23, y+50, 10,10);
       ellipse(x+50,y+20, 10,10);
       ellipse(x+50, y+35, 10,10);
       ellipse(x+50, y+50, 10,10);
     }
  }
  
  //get the number for a single die
  function getValue(){
    return value;
  }
  
  
  //changes the values of the array for every roll
  function changeValue(){
    value =   (int)(Math.random()*6+1);
  }
  
 function getTotals(){
   return total; 
  }
  
}


class Show{
  var finalTotal;
  Die d1;
  Die d2;
  Die d3;
  Die d4;
  Die d5;
  Die d6;
  Die d7;
  Die d8;
  Die d9;
  Die d10;
  Die d11;
  Die d12;
  Die d13;
  Die d14;
  Die d15;
  Die d16;
  Die d17;
  Die d18;
  Die d19;
  Die d20;
  Die d21;
  Die d22;
  Die d23;
  Die d24;
  Die d25;
  Die d26;
  Die d27;
  Die d28;
  Die d29;
  Die d30;
  Die d31;
  Die d32;
  Die d33;
  Die d34;
  Die d35;
  Die d36;
  Die d37;
  Die d38;
  Die d39;
  Die d40;
  Die d41;
  Die d42;
  Die d43;
  Die d44;
  Die d45;
  Die d46;
  Die d47;
  Die d48;
  Die d49;
  
  
  public Show(){ 
    d1 = new Die(10,10);
    d2 = new Die(100,10);
    d3 = new Die(180,10);
    d4 = new Die(260, 10);
    d5 = new Die(340,10);
    d6 = new Die(420,10);
    d7 = new Die(500,10);
    d8 = new Die(10,100);
    d9 = new Die(100,100);
    d10 = new Die(180,100);
    d11 = new Die(260,100);
    d12 = new Die(340,100);
    d13 = new Die(420,100);
    d14 = new Die(500,100);
    d15 = new Die(10,180);
    d16 = new Die(100,180);
    d17 = new Die(180,180);
    d18 = new Die(260,180);
    d19 = new Die(340,180);
    d20 = new Die(420,180);
    d21 = new Die(500,180);
    d22 = new Die(10,260);
    d23 = new Die(100,260);
    d24 = new Die(180,260);
    d25 = new Die(260,260);
    d26 = new Die(340,260);
    d27 = new Die(420,260);
    d28 = new Die(500,260);
    d29 = new Die(10,340);
    d30 = new Die(100,340);
    d31 = new Die(180,340);
    d32 = new Die(260,340);
    d33 = new Die(340,340);
    d34 = new Die(420,340);
    d35 = new Die(500,340);
    d36 = new Die(10,420);
    d37 = new Die(100,420);
    d38 = new Die(180,420);
    d39 = new Die(260,420);
    d40 = new Die(340,420);
    d41 = new Die(420,420);
    d42 = new Die(500,420);
    d43= new Die(10,500);
    d44 = new Die(100,500);
    d45 = new Die(180,500);
    d46 = new Die(260,500);
    d47 = new Die(340,500);
    d48 = new Die(420,500);
    d49 = new Die(500,500);
  }
  
  public void allDice(){
    d1.showValues();
    d2.showValues();
    d3.showValues();
    d4.showValues();
    d5.showValues();
    d6.showValues();
    d7.showValues();
    d8.showValues();
    d9.showValues();
    d10.showValues();
    d11.showValues();
    d12.showValues();
    d13.showValues();
    d14.showValues();
    d15.showValues();
    d16.showValues();
    d17.showValues();
    d18.showValues();
    d19.showValues();
    d20.showValues();
    d21.showValues();
    d22.showValues();
    d23.showValues();
    d24.showValues();
    d25.showValues();
    d26.showValues();
    d27.showValues();
    d28.showValues();
    d29.showValues();
    d30.showValues();
    d31.showValues();
    d32.showValues();
    d33.showValues();
    d34.showValues();
    d35.showValues();
    d36.showValues();
    d37.showValues();
    d38.showValues();
    d39.showValues();
    d40.showValues();
    d41.showValues();
    d42.showValues();
    d43.showValues();
    d44.showValues();
    d45.showValues();
    d46.showValues();
    d47.showValues();
    d48.showValues();
    d49.showValues();
  }
  
  public void tot(){
    addTotals(d1.getTotals());
    addTotals(d2.getTotals());
    addTotals(d3.getTotals());
    addTotals(d4.getTotals());
    addTotals(d5.getTotals());
    addTotals(d6.getTotals());
    addTotals(d7.getTotals());
    addTotals(d8.getTotals());
    addTotals(d9.getTotals());
    addTotals(d10.getTotals());
    addTotals(d11.getTotals());
    addTotals(d12.getTotals());
    addTotals(d13.getTotals());
    addTotals(d14.getTotals());
    addTotals(d15.getTotals());
    addTotals(d16.getTotals());
    addTotals(d17.getTotals());
    addTotals(d18.getTotals());
    addTotals(d19.getTotals());
    addTotals(d20.getTotals());
    addTotals(d21.getTotals());
    addTotals(d22.getTotals());
    addTotals(d23.getTotals());
    addTotals(d24.getTotals());
    addTotals(d25.getTotals());
    addTotals(d26.getTotals());
    addTotals(d27.getTotals());
    addTotals(d28.getTotals());
    addTotals(d29.getTotals());
    addTotals(d30.getTotals());
    addTotals(d31.getTotals());
    addTotals(d32.getTotals());
    addTotals(d33.getTotals());
    addTotals(d34.getTotals());
    addTotals(d35.getTotals());
    addTotals(d36.getTotals());
    addTotals(d37.getTotals());
    addTotals(d38.getTotals());
    addTotals(d39.getTotals());
    addTotals(d40.getTotals());
    addTotals(d41.getTotals());
    addTotals(d42.getTotals());
    addTotals(d43.getTotals());
    addTotals(d44.getTotals());
    addTotals(d45.getTotals());
    addTotals(d46.getTotals());
    addTotals(d47.getTotals());
    addTotals(d48.getTotals());
    addTotals(d49.getTotals());
  }
  
  public void addTotals(int t){
   finalTotal+= t;
 }
 
 public int getTot(){
  return finalTotal; 
 }
 
 public void showtot(){
   noStroke();
   textSize(50);
   fill(#4BA4AB);
   rect(100,620,400,630);
   fill(0);
   text("Score: "+s.getTot(), 150, 670);
 }
 
}

