const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer 
//Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer = "";



//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer 
  // Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user’s responses.
  for(i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 
  // Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate’s responses in addition to the corresponding correct answers
  let numcorrect = 0;
  let checkCorrectAnswers = correctAnswers.join(',').toLowerCase().split(',');
  let checkCandidateAnswers = candidateAnswers.join(',').toLowerCase().split(',');
  for (i = 0; i < questions.length; i++) {
      if (checkCandidateAnswers[i] === checkCorrectAnswers[i]) {
        console.log(`\n Question ${i+1}) ${questions[i]} \n Your answer: ${candidateAnswers[i]} \n correct answer: ${correctAnswers[i]} \n You answered correctly!`)
        numcorrect += 1;
      }
        else {
          console.log(`\n Question ${i+1}) ${questions[i]} \n Your answer: ${candidateAnswers[i]} \n correct answer: ${correctAnswers[i]} \n Your answer was incorrect!`)
        }
  }

  let grade = (numcorrect / questions.length) * 100  //TODO 3.2 use this variable to calculate the candidates score.

  if (numcorrect >= 4){
      console.log(`\n>>> Overall Grade: ${grade}% (${numcorrect} of ${questions.length} responses correct)`);
      console.log(`>>> Status: Passed <<<`);
  }
    else {
      console.log(`\n>>> Overall Grade: ${grade}% (${numcorrect} of ${questions.length} responses correct)`);
      console.log(`>>> Status: Failed <<<`);
      console.log(`Minimum grade to pass is 80%.`);
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Greetings: " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};