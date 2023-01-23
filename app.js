"use strict";

let question1 = confirm("Do you have a dog?");
console.log(question1);

if (question1 == true) {
  console.log("awww a puppy");
} else {
  console.log("well that sucks");
}

let colour = prompt("Waht is your favourite colour?");

switch (colour.toLowerCase()) {
  case "pink":
    console.log("nice, pinks my favourite too");
    break;
  case "red":
    console.log("beter red than fred");
    break;
  default:
    console.log("That doesn't seem to be a real colour :( ");
}
