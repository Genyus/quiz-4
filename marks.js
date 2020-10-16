document.body.style.backgroundColor = "white";


let score = parseInt(getCookie("quiz"))

document.getElementById("theQuestion").innerText=score; 


// setCookie("quiz", ++score.toString(), 7)



// const targetButton = document.getElementById("button"); 
// const targetMarks = document.getElementById("marks.html")
// targetButton.addEventListener("click", clickButton);

// the Dom research this ASAP & funtions (the way they work)

// const score = 0;

// function score() {
// for (var i=0; i < answer.length; i++)
//   var response = window.prompt(answer[i].prompt);
//   if(response === answer[i].answer){
//     score++;
//   }
//         }
// alert(score + "/" + answer.length);
// "theOptions"
// this is the JSON research more please Emma!!
// THE DOM!


// // THE FOR LOOP CHILLLE!

// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// submitButton.addEventListener('click', showResults);

// function showResults(){

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');
  
//     // keep track of user's answers
//     let numCorrect = 0;
  
//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {
  
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;
  
//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });
  
//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   // gather answer containers from our quiz
// const answerContainers = quizContainer.querySelectorAll('.answers');

// // keep track of user's answers
// let numCorrect = 0;
