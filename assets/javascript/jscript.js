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

let iChing = {
    first_yao: iChing.yaoThrow(),
    second_yao: iChing.yaoThrow(),
    third_yao: iChing.yaoThrow(),
    fourth_yao: iChing.yaoThrow(),
    fifth_yao: iChing.yaoThrow(),
    sixth_yao: iChing.yaoThrow(),

    zhou_yi: [
        first_yao,
        second_yao,
        third_yao,
        fourth_yao,
        fifth_yao,
        sixth_yao
    ],

}

// OPERATION FLOW:

html_throw_button.on("click", function throw() {
    
})


// DEFINE GENERATOR FUNCTIONS

// YAO_THROW()  -  3XCOIN TOSS AND CALCULATE TOTAL VALUE, RECORD NUMERICAL VALUE AND YAO VALUE

// DEFINE APP VARIABLES

// REFER TO https://en.wikipedia.org/wiki/I_Ching FOR HEXAGRAM IMAGES
    // NO NEED! THEY HAVE UNICODE VALUES!

// ATTEMPT SCRAPING https://en.wikipedia.org/wiki/List_of_hexagrams_of_the_I_Ching#Hexagram_3 FOR RAW DATA

// STORE HEX CODES IN AN OBJECT