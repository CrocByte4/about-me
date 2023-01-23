"use strict";

function getName() {
  let userName = prompt("What is your neme?");
  console.log(userName);
}

let question1 = confirm("Do I have a dog?");
console.log(question1);

if (question1 === "yes") {
  console.log("You're absolutely right I do, she's a good girl");
} else if (question1 === "no") {
  console.log("I'm afraid you're wrong :( Sorry");
} else {
  console.log("That's not a real answer");
}

let question2 = confirm("Do I have a job?");
console.log(question2);

if (question2 === "yes") {
  console.log("Nope, but hopefully that'll change soon");
} else if (question2 === "no") {
  console.log("That's right, it's quite boring");
} else {
  console.log("That's not a real answer");
}

let question3 = confirm("Can I drive a car?");
console.log(question3);

if (question3 === "yes") {
  console.log("Incorrect, though I have had driving lessons");
} else if (question3 === "no") {
  console.log(
    "Correctamundo, I've had driving lessons and passed the theory test but I never went further than that"
  );
} else {
  console.log("That's not a real answer");
}

let question4 = confirm("Do I eat a lot of cheese?");
console.log(question4);

if (question4 === "yes") {
  console.log("You know me so well :) I should cut down on it");
} else if (question4 === "no") {
  console.log("You've clearly never met me, you're wrong my friend");
} else {
  console.log("That's not a real answer");
}

let question5 = confirm("Am I a gemer?");
console.log(question5);

if (question5 === "yes") {
  console.log("Yep yep yep! Gaming is my biggest hobby");
} else if (question5 === "no") {
  console.log("Are you playing games with me? You've got that one wrong buddy");
} else {
  console.log("That's not a real answer");
}

let buttonColour = prompt("Waht is your favourite colour?");

switch (buttonColour.toLowerCase()) {
  case "pink":
    console.log("nice, pinks my favourite too");
    break;
  case "red":
    console.log("beter red than fred");
    break;
  default:
    console.log("That doesn't seem to be a real colour :( ");
}
