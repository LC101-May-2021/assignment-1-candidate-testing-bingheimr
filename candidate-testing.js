const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  let name = input.question("Please enter your name: ");
  candidateName = name;
}

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  'Who was the first American woman in space? ', 
  'True or false: 5 kilometer == 5000 meters? ', 
  '(5 + 3)/2 * 10 = ? ', 
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 
  'What is the minimum crew size for the ISS? '
  ];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 	
  "3"
  ];
let candidateAnswers = [];
let numberCorrect = 0


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    let candidateAnswer = input.question("Your Answer: ");
    candidateAnswer = candidateAnswers.push(candidateAnswer);

    let strCorrectAnswers = correctAnswers.toString()
    let strCandidateAnswers = candidateAnswers.toString()
    strCandidateAnswers.toLowerCase() === strCorrectAnswers.toLowerCase()
    
    if (strCandidateAnswers[i] === strCorrectAnswers[i]) {
      numberCorrect++
    }
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    console.log("")
    console.log(numberCorrect)
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = ((numberCorrect)/(questions.length)*100);
  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${questions.length} responses correct) <<<`)
  if (grade < 80) {
    console.log(">>> Status: FAILED <<<")
  } else {
  console.log(">>> Status: PASSED <<<")
  return grade;
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Hello", candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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
}
