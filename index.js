var readLineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.bold.red("Let's see how much do you know F.R.I.E.N.D.S?"));
var score = 0;

questionOne = {
    question: "1) According to Rachel, What is Chandler Bing's Job?",
    options: ['Data Analyst', 'Transponster', 'Investment Banker', ' An Actor'],
    answer: 'Transponster'
};

questionTwo = {
    question: "2) Which Character did Joey play in Days of our Lives?",
    options: ['Dr. Drake Ramoray', 'Joseph Tibiani', 'Ken Adams', 'Matt LeBlanc'],
    answer: 'Dr. Drake Ramoray'
};

questionThree = {
    question: "3) Who is Joey's childhood bed pal?",
    options: ['Girls', 'Hugsy', 'Cowboy dress', 'Teddy'],
    answer: 'Hugsy'
};

questionFour = {
    question: "4) What was Monica's Nickname in highschool?",
    options: ['Baby elephant', 'Big-fat goli', 'Fatty-Faterson', 'Beauty-Queen'],
    answer: 'Big-fat goli'
};

questionFive = {
    question: "5) Which career did Ross compromise to become a Paleantologist?",
    options: ['Basketball', 'American-Football', 'Space-Scientist', 'Chef'],
    answer: 'Basketball'
};

questionSix = {
    question: "6) According to Phoebe, who was her grandpa?",
    options: ['Peter Parker', 'Stephen Hawkins', 'Neil Arm Strong', 'Albert Einstein'],
    answer: 'Albert Einstein'
};

questionSeven = {
    question: "7) Who was Rachel's fiance?",
    options: ['Barry', 'Joshua', 'Ross', 'Joey'],
    answer: 'Barry'
};

questionEight = {
    question: "8) Why did Monica and Chandler sleep together in England?",
    options: ['Monica was upset', 'Monica was attracted to Chandler', 'Chandler confessed that he loves Monica', 'They just found each other attractive'],
    answer: 'Monica was upset'
};

questionNine = {
    question: "9) How many roses did Ross send Emily?",
    options: ['70', '71', '72', '73'],
    answer: '72'
};

questionTen = {
    question: "10) Theme of which song did Ross put up on the answering machine after moving in with Chandler and Joey?",
    options: ['We will Rock You', 'We are the Champions', 'Love of my life', 'The Show must go on'],
    answer: 'We will Rock You'
};

// var counter = 1 ;
function askAboutFriends(myQuestion, myOptions, myAnswer) {
    console.log();
    console.log(chalk.blueBright(myQuestion));
    var ans = readLineSync.keyInSelect(myOptions);
    if (myOptions[ans] === myAnswer) {
        score = score + 1;
    }
}

askAboutFriends(questionOne.question, questionOne.options, questionOne.answer);
askAboutFriends(questionTwo.question, questionTwo.options, questionTwo.answer);
askAboutFriends(questionThree.question, questionThree.options, questionThree.answer);
askAboutFriends(questionFour.question, questionFour.options, questionFour.answer);
askAboutFriends(questionFive.question, questionFive.options, questionFive.answer);
if (score >= 4) {
    console.log();
    console.log(chalk.yellow("YOU ARE QUALIFIED FOR LEVEL 2!!"))
    askAboutFriends(questionSix.question, questionSix.options, questionSix.answer);
    askAboutFriends(questionSeven.question, questionSeven.options, questionSeven.answer);
    askAboutFriends(questionEight.question, questionEight.options, questionEight.answer);
    askAboutFriends(questionNine.question, questionNine.options, questionNine.answer);
    askAboutFriends(questionTen.question, questionTen.options, questionTen.answer);
} else {
    console.log(chalk.bold.redBright("OOPS! YOU DID NOT QUALIFY FOR LEVEL 2!"))
}
console.log();
console.log(chalk.bold.magentaBright("You Scored " + score + " out of 10!"));
if (score === 10) {
    console.log(chalk.bold.cyanBright("CONGRATULATIONS! YOU WON!"));
} else {
    console.log(chalk.bold.redBright("Well Done! Play Again to score better!"))
}