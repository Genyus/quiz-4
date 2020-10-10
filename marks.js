document.body.style.backgroundColor = "white";

const targetButton = document.getElementById("button"); 
const targetMarks = document.getElementById("marks.html")
targetButton.addEventListener("click", clickButton);
// the Dom research this ASAP & funtions (the way they work)

function clickButton() {
        }

// "theOptions"

// this is the JSON research more please Emma!!
var question1 = {
        prompt: "Your Score!",
            answers:  
                ["PASS",
                "FAIL"],
            answer: 1,
    }
// THE DOM!
document.getElementById("theQuestion").innerText=question1.prompt; 

// THE FOR LOOP CHILLLE!

const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', showResults);

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  // gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;
