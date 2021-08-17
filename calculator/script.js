


function num(text) {
 document.getElementById("number").value += text;
}

function reset() {
 document.getElementById("number").value = " ";
}

function calc() {
 // let opt = document.getElementById("number").value;

 // opt = eval(opt).value;

 document.getElementById("number").value = eval(document.getElementById("number").value);
}

// function eight() {
//  document.getElementById("number").value = 8;
// }

// function nine() {
//  document.getElementById("number").value = 9;
// }

// function x() {
//  document.getElementById("number").value = "*";
// }

// function four() {
//  document.getElementById("number").value = 4;
// }

// function five() {
//  document.getElementById("number").value = 5;
// }

// function six() {
//  document.getElementById("number").value = 6;
// }

// function subtract() {
//  document.getElementById("number").value = "-";
// }

// function one() {
//  document.getElementById("number").value = 1;
// }

// function two() {
//  document.getElementById("number").value = 2;
// }

// function three() {
//  document.getElementById("number").value = 3;
// }

// function sum() {
//  document.getElementById("number").value = "+";
// }

// function zero() {
//  document.getElementById("number").value = 0;
// }

// function dot() {
//  document.getElementById("number").value = ".";
// }