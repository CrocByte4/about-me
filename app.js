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
  alert("But there's just one more thing.");
  let tries = 4;
  let question6 = prompt(
    "I'm thinking of a number between 1 and 10. What is it? You have " +
      tries +
      " tries remaining"
  );

  for (let i = 4; i > 0; i--) {
    console.log("i = " + i);
    if (i == 1) {
      alert("aww it seems you ran out if tries :( It was 8 all along!");
      break;
    }
    if (question6 == 8) {
      alert("Well done that was it");
      console.log("Correct answer!");
      return;
    } else if (question6 < 8) {
      question6 = prompt(
        "Nope, too small! You have " + (i - 1) + " tries left"
      );
      console.log("Incorrect, too small!. " + (i - 1) + "tries left!");
    } else if (question6 > 8) {
      question6 = prompt("Nope, too big! You have " + (i - 1) + " tries left");
      console.log("Incorrect, too big!. " + (i - 1) + "tries left!");
    } else if (isNaN(question6)) {
      question6 = prompt(
        "That is not a number! You have " + (i - 1) + " tries left"
      );
      console.log("Incorrect, not a number. " + (i - 1) + "tries left!");
    }
  }
}

// this part will be an array based guessing game with 6 attempts, will end when answered correctly or run out of attempts, display all correct answers after
function getIrnMadn() {
  alert("Well you got past that, but here's another time waster for ya!");

  let tries = 6;

  let songs = [
    "run to the hills",
    "the number of the beast",
    "fear of the dark",
    "speed of light",
    "the writing on the wall",
    "the trooper",
    "die with your boots on",
    "be quick or be dead",
    "from here to eternity",
    "chains of misery",
    "gates of tomorrow",
  ];
  let songAnswer = prompt(
    "Name one of the best Iron Maiden Songs! I'll give you " +
      tries +
      " tries for this one."
  );
  console.log("User input = " + songAnswer);

  while (tries > 0) {
    for (let i = 0; i < songs.length; i++) {
      if (songAnswer.toLowerCase() == songs[i]) {
        console.log("User gave a correct answer.");
        alert("Well done, you got one!");
        tries = 0;
      }
    }
    if (tries > 0) {
      console.log("User has " + tries + " tries left.");
      songAnswer = prompt(
        "Nope, keep at it, you've still got " + tries + " tries left!"
      );
      tries--;
    }
  }
}

function changeColour() {
  let buttonColour = prompt("What is your favourite colour?");

  switch (buttonColour.toLowerCase()) {
    case "pink":
      alert("nice, pinks my favourite too");
      console.log("nice, pinks my favourite too");
      break;
    case "red":
      alert("beter red than fred");
      console.log("beter red than fred");
      break;
    default:
      alert("That doesn't seem to be a real colour :( ");
      console.log("That doesn't seem to be a real colour :( ");
  }
}
