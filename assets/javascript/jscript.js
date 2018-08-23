// DEFINE HTML WRITE VARIABLES

let html_new_oracle_button = document.getElementById("new_oracle");
let html_first_throw = document.getElementById("first_throw");
let html_second_throw = document.getElementById("second_throw");
let html_third_throw = document.getElementById("third_throw");
let html_fourth_throw = document.getElementById("fourth_throw");
let html_fifth_throw = document.getElementById("fifth_throw");
let html_sixth_throw = document.getElementById("sixth_throw");
let html_zhou_yi = document.getElementById("zhou_yi");
let html_zhou_yi_reverse = document.getElementById("zhou_yi_reverse");


// JQUERY VERSION:

let html_header = $("#begin_here");
let html_throw_button = $("#throw");
let html_throw_results = $("#throw_results");
let html_hexagram = $("#hexagram");
let html_sec_hex = $("#second_hex");

// DEFINE REFERENCE OBJECT - This is where I can store the values to search through once the logic is taking shape.

// let iChing = {
//     first_yao: this.yaoThrow(),
//     second_yao: this.yaoThrow(),
//     third_yao: this.yaoThrow(),
//     fourth_yao: this.yaoThrow(),
//     fifth_yao: this.yaoThrow(),
//     sixth_yao: this.yaoThrow(),

//     zhou_yi: [
//         first_yao,
//         second_yao,
//         third_yao,
//         fourth_yao,
//         fifth_yao,
//         sixth_yao
//     ],

// }

// THE HEXAGRAM OBJECT CONTAINS AN ARRAY OF MYTHROW OBJECTS. 
// THE HEXAGRAM OBJECT HAS A FUNCTION THAT CALLS THE MYTHROW CONSTRUCTOR 6 TIMES

let myThrow = { // THIS IS AN OBJECT TO SET EACH UNIQUE THROW, AND WILL BUILD AN ARRAY OF OBJECTS IN THE HEXAGRAM OBJECT
    coinState: [], // 0 is heads, 1 is tails
    line: "odd", //used to determine solid or broken line
    ptTotal: 0,
    bonus: false,
    order: 1,

    coinToss: function () {
        let toss = [];
        let ptTotalCalc = 0;
    // sets a 3 value array
        for (let i = 0; i < 3; i++) {
            toss.push(Math.floor(Math.random()*2));
            console.log(toss);
        }
        this.coinState = toss;
    // calcuates and sets pt total
        toss.forEach(i => {
            if (i === 0) {
                ptTotalCalc+=2;
            } else {ptTotalCalc+=3}
        });
        console.log("point total: " + ptTotalCalc);
        this.ptTotal = ptTotalCalc;
    // sets broken or unbroken line status
        if (this.ptTotal % 2 == 0) {
            this.line = "unbroken";
        } else {this.line = "broken"}
    // Checks for a special status if total it 6 or 9
        if (ptTotalCalc === 6 || ptTotalCalc === 9) {
            this.bonus = true;
        } else {this.bonus = false}

        console.log("coinstate: " + this.coinState);
        console.log("line: " + this.line);
        console.log("ptTotal: " + this.ptTotal);
        console.log("bonus: " + this.bonus);
    }
}


$(document).ready(function () {
    
    $("#throw").on("click", function() {
        myThrow.coinToss();
        // This function needs to do a few things:
        // 1. it must cast 3 coinFlip() functions that return a heads/tails and a 2 or 3 value
        // 2. it must tally the total value of 2 and 3 pt values from the 3 coin flips.
        // 3. it must record odd or even
        // 4. it must capture the special states of pt total 6 or 9
        // 5. it must output 
        // a. h/t visual cues for the 3 coin images
        // b. total pts ---> odd or even ---> broken or unbroken line
        // c. "special line" state for this throw
        // This may be best served as an object constructor
    })    

});


// DEFINE GENERATOR FUNCTIONS

// YAO_THROW()  -  3XCOIN TOSS AND CALCULATE TOTAL VALUE, RECORD NUMERICAL VALUE AND YAO VALUE

// DEFINE APP VARIABLES

// REFER TO https://en.wikipedia.org/wiki/I_Ching FOR HEXAGRAM IMAGES
    // NO NEED! THEY HAVE UNICODE VALUES!

// ATTEMPT SCRAPING https://en.wikipedia.org/wiki/List_of_hexagrams_of_the_I_Ching#Hexagram_3 FOR RAW DATA

// STORE HEX CODES IN AN OBJECT