"use strict";

function getName() {
  let userName = prompt("What is your name?");
  alert(
    "Welcome to my about me website " +
      userName +
      " ! BUT before we get to the page I'd like to play a little game with you. Please answer yes or no to the following:"
  );
  document.write(userName);
  console.log(userName);
}

let quizScore = 0;

function getDog() {
  let question1 = prompt("Do I have a dog?");
  console.log(question1);

  if (question1.toLowerCase() === "yes") {
    alert("You're absolutely right I do, she's a good girl");
    quizScore++;
  } else if (question1.toLowerCase() === "no") {
    alert("I'm afraid you're wrong :( Sorry");
  } else {
    alert("That's not a real answer");
  }
}

function getJob() {
  let question2 = prompt("Do I have a job?");
  console.log(question2);

  if (question2.toLowerCase() === "yes") {
    alert("Nope, but hopefully that'll change soon");
  } else if (question2.toLowerCase() === "no") {
    alert("That's right, it's quite boring");
    quizScore++;
  } else {
    alert("That's not a real answer");
  }
}

function getCar() {
  let question3 = prompt("Can I drive a car?");
  console.log(question3);

  if (question3.toLowerCase() === "yes") {
    alert("Incorrect, though I have had driving lessons");
  } else if (question3.toLowerCase() === "no") {
    alert(
      "Correctamundo, I've had driving lessons and passed the theory test but I never went further than that"
    );
    quizScore++;
  } else {
    alert("That's not a real answer");
  }
}

function getCheese() {
  let question4 = prompt("Do I eat a lot of cheese?");
  console.log(question4);

  if (question4.toLowerCase() === "yes") {
    alert("You know me so well :) I should cut down on it");
    quizScore++;
  } else if (question4.toLowerCase() === "no") {
    alert("You've clearly never met me, you're wrong my friend");
  } else {
    alert("That's not a real answer");
  }
}

function getGamer() {
  let question5 = prompt("Am I a gamer?");
  console.log(question5);

  if (question5.toLowerCase() === "yes") {
    alert("Yep yep yep! Gaming is my biggest hobby");
    quizScore++;
  } else if (question5.toLowerCase() === "no") {
    alert("Are you playing games with me? You've got that one wrong buddy");
  } else {
    alert("That's not a real answer");
  }
}

function getScore() {
  alert("You've reached the end, well done! You got " + quizScore + "/5");
}

function getNumber() {
  tries = 4;
  for (let i = 4; i > 0; i--) {
    let question6 = prompt(
      "But there's just one more thing. I'm thinking of a number between 1 and 10. What is it? You have 4 tries"
    );
    console.log(i);

    if (question6() === 8) {
      alert("Well done that was it");
    } else if (question6() < 8) {
      tries--;
      question6 = prompt("Nope, too small! You have " + tries + " tries left");
    } else if (question6() > 8) {
      tries--;
      question6 = prompt("Nope, too big! You have " + tries + " tries left");
    } else {
      tries--;
      prompt("That is not a number! You have " + tries + " tries left");
      if ((attempts = 0)) {
        alert(
          "Aww, you've used u; all of your tries :( The correct answer was 8!"
        );
      }
    }
  }
}

// this wasnt working so get back to this
//( if (question6() === 8) {
//  alert("Nice one, you got it!");
// } else if (question6() < 8) {
//   let question6 = prompt("Bigger than that, try again");
// } else if (question6() > 8) {
//   let question6 = prompt("Smaller than that, give it another go");
//  alert("Aww that's all folks. It was 8 all along");

function changeColour() {
  let buttonColour = prompt("What is your favourite colour?");

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
}
