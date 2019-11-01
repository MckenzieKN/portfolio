'use strict'
var s;
var d;
var tot;

function setup() {
    createCanvas(600, 700);
    background(0);
    strokeWeight(10);
    textSize(15);
    s = new Show();
    d = new Die();
    text("Each 6 is worth +15. All other numbers will be negative", 10, 600);
    fill('#4BA4AB');
    rect(100, 620, 400, 630);
    fill('#0367A6');
    rect(520, 620, 80,80);
}

function draw() {}

//will change all the dice values when the mouse is clicked
function mouseClicked() {
    s.allDice();
    s.tot();
    s.showtot();
}

class Die {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = 0;
        this.total = 0;
        fill('#4BA4AB');
        //stroke(0);
        rect(this.x, this.y, 75, 75, 20);
    }

    //will put the new values on the dice
    showValues() {
        this.changeValue();
        if (this.value == 1) {
            this.total -= 1;
            fill(255);
            stroke(0);
            rect(this.x, this.y, 75, 75, 20);
            fill('#4BA4AB');
            noStroke();
            ellipse(this.x + 37, this.y + 37, 10, 10);
        } else if (this.value == 2) {
            this.total -= 2;
            fill(255);
            stroke(0);
            rect(this.x, this.y, 75, 75, 20);
            fill('#4BA4AB');
            noStroke();
            ellipse(this.x + 37, this.y + 25, 10, 10);
            ellipse(this.x + 37, this.y + 50, 10, 10);
        } else if (this.value == 3) {
            this.total -= 3;
            fill(255);
            stroke(0);
            rect(this.x, this.y, 75, 75, 20);
            fill('#4BA4AB');
            noStroke();
            ellipse(this.x + 37, this.y + 20, 10, 10);
            ellipse(this.x + 37, this.y + 35, 10, 10);
            ellipse(this.x + 37, this.y + 50, 10, 10);
        } else if (this.value == 4) {
            this.total -= 4;
            fill(255);
            stroke(0);
            rect(this.x, this.y, 75, 75, 20);
            fill('#4BA4AB');
            noStroke();
            ellipse(this.x + 24, this.y + 23, 10, 10);
            ellipse(this.x + 24, this.y + 56, 10, 10);
            ellipse(this.x + 56, this.y + 23, 10, 10);
            ellipse(this.x + 56, this.y + 56, 10, 10);
        } else if (this.value == 5) {
            this.total -= 5;
            fill(255);
            stroke(0);
            rect(this.x, this.y, 75, 75, 20);
            fill('#4BA4AB');
            noStroke();
            ellipse(this.x + 24, this.y + 23, 10, 10);
            ellipse(this.x + 24, this.y + 56, 10, 10);
            ellipse(this.x + 56, this.y + 23, 10, 10);
            ellipse(this.x + 56, this.y + 56, 10, 10);
            ellipse(this.x + 37, this.y + 37, 10, 10);
        } else {
            this.total += 15;
            fill('#4BA4AB');
            stroke(0);
            rect(this.x, this.y, 75, 75, 20);
            fill(0);
            noStroke();
            ellipse(this.x + 23, this.y + 20, 10, 10);
            ellipse(this.x + 23, this.y + 35, 10, 10);
            ellipse(this.x + 23, this.y + 50, 10, 10);
            ellipse(this.x + 50, this.y + 20, 10, 10);
            ellipse(this.x + 50, this.y + 35, 10, 10);
            ellipse(this.x + 50, this.y + 50, 10, 10);
        }
    }

    //get the number for a single die
    getValue() {
        return this.value;
    }

    //changes the values of the array for every roll
    changeValue() {
        this.value = (int)(Math.random() * 6 + 1);
    }

    getTotals() {
        return this.total;
    }
}

class Show {

    constructor() {
        this.finalTotal = 0;
        this.d1 = new Die(10, 10);
        this.d2 = new Die(100, 10);
        this.d3 = new Die(180, 10);
        this.d4 = new Die(260, 10);
        this.d5 = new Die(340, 10);
        this.d6 = new Die(420, 10);
        this.d7 = new Die(500, 10);
        this.d8 = new Die(10, 100);
        this.d9 = new Die(100, 100);
        this.d10 = new Die(180, 100);
        this.d11 = new Die(260, 100);
        this.d12 = new Die(340, 100);
        this.d13 = new Die(420, 100);
        this.d14 = new Die(500, 100);
        this.d15 = new Die(10, 180);
        this.d16 = new Die(100, 180);
        this.d17 = new Die(180, 180);
        this.d18 = new Die(260, 180);
        this.d19 = new Die(340, 180);
        this.d20 = new Die(420, 180);
        this.d21 = new Die(500, 180);
        this.d22 = new Die(10, 260);
        this.d23 = new Die(100, 260);
        this.d24 = new Die(180, 260);
        this.d25 = new Die(260, 260);
        this.d26 = new Die(340, 260);
        this.d27 = new Die(420, 260);
        this.d28 = new Die(500, 260);
        this.d29 = new Die(10, 340);
        this.d30 = new Die(100, 340);
        this.d31 = new Die(180, 340);
        this.d32 = new Die(260, 340);
        this.d33 = new Die(340, 340);
        this.d34 = new Die(420, 340);
        this.d35 = new Die(500, 340);
        this.d36 = new Die(10, 420);
        this.d37 = new Die(100, 420);
        this.d38 = new Die(180, 420);
        this.d39 = new Die(260, 420);
        this.d40 = new Die(340, 420);
        this.d41 = new Die(420, 420);
        this.d42 = new Die(500, 420);
        this.d43 = new Die(10, 500);
        this.d44 = new Die(100, 500);
        this.d45 = new Die(180, 500);
        this.d46 = new Die(260, 500);
        this.d47 = new Die(340, 500);
        this.d48 = new Die(420, 500);
        this.d49 = new Die(500, 500);
    }

    allDice() {
        this.d1.showValues();
        this.d2.showValues();
        this.d3.showValues();
        this.d4.showValues();
        this.d5.showValues();
        this.d6.showValues();
        this.d7.showValues();
        this.d8.showValues();
        this.d9.showValues();
        this.d10.showValues();
        this.d11.showValues();
        this.d12.showValues();
        this.d13.showValues();
        this.d14.showValues();
        this.d15.showValues();
        this.d16.showValues();
        this.d17.showValues();
        this.d18.showValues();
        this.d19.showValues();
        this.d20.showValues();
        this.d21.showValues();
        this.d22.showValues();
        this.d23.showValues();
        this.d24.showValues();
        this.d25.showValues();
        this.d26.showValues();
        this.d27.showValues();
        this.d28.showValues();
        this.d29.showValues();
        this.d30.showValues();
        this.d31.showValues();
        this.d32.showValues();
        this.d33.showValues();
        this.d34.showValues();
        this.d35.showValues();
        this.d36.showValues();
        this.d37.showValues();
        this.d38.showValues();
        this.d39.showValues();
        this.d40.showValues();
        this.d41.showValues();
        this.d42.showValues();
        this.d43.showValues();
        this.d44.showValues();
        this.d45.showValues();
        this.d46.showValues();
        this.d47.showValues();
        this.d48.showValues();
        this.d49.showValues();
    }

    tot() {
        this.addTotals(this.d1.getTotals());
        this.addTotals(this.d2.getTotals());
        this.addTotals(this.d3.getTotals());
        this.addTotals(this.d4.getTotals());
        this.addTotals(this.d5.getTotals());
        this.addTotals(this.d6.getTotals());
        this.addTotals(this.d7.getTotals());
        this.addTotals(this.d8.getTotals());
        this.addTotals(this.d9.getTotals());
        this.addTotals(this.d10.getTotals());
        this.addTotals(this.d11.getTotals());
        this.addTotals(this.d12.getTotals());
        this.addTotals(this.d13.getTotals());
        this.addTotals(this.d14.getTotals());
        this.addTotals(this.d15.getTotals());
        this.addTotals(this.d16.getTotals());
        this.addTotals(this.d17.getTotals());
        this.addTotals(this.d18.getTotals());
        this.addTotals(this.d19.getTotals());
        this.addTotals(this.d20.getTotals());
        this.addTotals(this.d21.getTotals());
        this.addTotals(this.d22.getTotals());
        this.addTotals(this.d23.getTotals());
        this.addTotals(this.d24.getTotals());
        this.addTotals(this.d25.getTotals());
        this.addTotals(this.d26.getTotals());
        this.addTotals(this.d27.getTotals());
        this.addTotals(this.d28.getTotals());
        this.addTotals(this.d29.getTotals());
        this.addTotals(this.d30.getTotals());
        this.addTotals(this.d31.getTotals());
        this.addTotals(this.d32.getTotals());
        this.addTotals(this.d33.getTotals());
        this.addTotals(this.d34.getTotals());
        this.addTotals(this.d35.getTotals());
        this.addTotals(this.d36.getTotals());
        this.addTotals(this.d37.getTotals());
        this.addTotals(this.d38.getTotals());
        this.addTotals(this.d39.getTotals());
        this.addTotals(this.d40.getTotals());
        this.addTotals(this.d41.getTotals());
        this.addTotals(this.d42.getTotals());
        this.addTotals(this.d43.getTotals());
        this.addTotals(this.d44.getTotals());
        this.addTotals(this.d45.getTotals());
        this.addTotals(this.d46.getTotals());
        this.addTotals(this.d47.getTotals());
        this.addTotals(this.d48.getTotals());
        this.addTotals(this.d49.getTotals());
    }

    addTotals(t) {
        this.finalTotal += t;
    }

    getTot() {
        return this.finalTotal;
    }

    showtot() {
        noStroke();
        textSize(50);
        fill('#4BA4AB');
        rect(100, 620, 400, 630);
        fill(0);
        text("Score: " + s.getTot(), 150, 670);
        fill('#0367A6');
    }

}

class Totals {

    constructor(finalTotal) {
        this.finalTotal = finalTotal;
    }

    addTotals(t) {
        this.finalTotal += t;
    }
    
    
    showtot() {
        noStroke();
        textSize(50);
        rect(100, 620, 400, 630);
        fill(0);
        text("Score: " + this.getTot(), 150, 670);
        fill('#0367A6');
        rect(520, 620, 80,80);
        console.log(this.getTot());
        if(this.getTot()>= 0){
         stroke('#91DB80');   
         console.log("green");
        } else {
         stroke('#ff0000')
         console.log("red");
        }
        strokeWeight(120);
        line(540,640,540,660);
        line(540,640,530,620);
        line(540,640,550,640);
        }
    getTot() {
        return this.finalTotal;
    }

  
 getTotals(){
   return this.total; 
  }
  
}




