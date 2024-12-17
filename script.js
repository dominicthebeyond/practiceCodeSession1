// DOM Notes:

/* 

.parentNode // Access parent node
. children // Access all children.
.nextElementSibling // next sibling
.previousElementSibling // previous sibling

*/

// selectors

// const card = document.getElementsByClassName('card');
// const body = document.querySelector('body');
// const images = document.querySelectorAll('.card img');


// // styles

// images.forEach((img) => {
//     img.style.width = "250px";
//     img.style.height = "250px";
// });

// let cardImg = document.querySelectorAll('.card img')
// let cardParagraph = document.querySelectorAll('.card p')
// let cardHeader = document.querySelectorAll('.card header')


function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Dominic"))

cardType = "bakery";

// if else if else statements 

if (cardType == "bakery") {
    console.log("This shop is part of a bakery!");
} else if (cardType == "subs") {
    console.log("This shop is a subs sandwitch shop!");
} else if (cardType == "coffee") {
    console.log("This shop is a coffee shop.");
} else {
    console.log("This shop isn't on the list of shops.")
}

// loops

// - For loop -

console.log("Welcome to for loops!")


for (let i = 0; i < 5; i++) { // Iterator is i, and it's incrementing by +1 when i is less than 5
    console.log(i);
}

// - While Loop -

console.log("Welcome to while loops!")
let count = 0; // Iterator/counter variable for while loop.

while(count < 3) {
    console.log(count);
    count++; // increments by +1 until count === 3.
}
