// alert("hello");

// generet number for player 1
let randomNum1 = Math.floor( Math.random() *6) + 1;
console.log(randomNum1);

// mengambil image based on hasil generate randomNum
var randomDiceIng = "dice" + randomNum1 + ".png";

// set random image source based on random number
const randomImgSource = `images/${randomDiceIng}`;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

// generet random number for player 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;

let randomDiceIng2 = "dice" + randomNum2 + ".png";

const randomImgSource2 = `images/${randomDiceIng2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);

if(randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML = "player 1 win";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "player 2 win";
} else{
    document.querySelector("h1").innerHTML = "draww prenn";
}