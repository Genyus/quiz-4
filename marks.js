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
for (i =0; i < question1.answers.length; i++) {
    var button=document.createElement("button"); //THE DOM HERE YOU SEE IT <--
    button.innerHTML =question1.answers[i];
    if (i === question1.answer) 
    {
    button.addEventListener("click", rightAnswer);
} else {button.addEventListener("click", wrongAnswer);
}
    
    document.getElementById("theOptions").appendChild(button);

}

function rightAnswer () {
    document.body.style.backgroundColor = "green"; 
    location.href = "question2.html";
}
function wrongAnswer () {
    document.body.style.backgroundColor = "red"; 
    location.href = "question2.html";
}

