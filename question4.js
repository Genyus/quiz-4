
document.body.style.backgroundColor = "white";

const targetButton = document.getElementById("button");

const targetQuestion4 = document.getElementById("question4");

targetButton.addEventListener("click", clickButton)

// the Dom research this ASAP & funtions (the way they work)

function clickButton() {

}
// this is the JSON research more please Emma!!

var question4 = {
    prompt: "What Musical Artist became known as a symbol?",
    answers:  
        ["(a) Singer",
        "(b) Army General",
        "(c) Nurse",
        "(d) Nun"],
        answer: 2,
}

document.getElementById("theQuestion").innerText=question4.prompt; 

for (i =0; i < question4.answers.length; i++) { 
    var button=document.createElement("button"); //THE DOM HERE YOU SEE IT <--
    button.innerHTML =question4.answers[i];
    if (i === question4.answer) 
    {
    button.addEventListener("click", rightAnswer);
} else {button.addEventListener("click", wrongAnswer);
} 

document.getElementById("theOptions").appendChild(button);

}

function rightAnswer () {
    document.body.style.backgroundColor = "green"; 
    location.href = "question5.html";
}
function wrongAnswer () {
    document.body.style.backgroundColor = "red"; 
    location.href="question5.html";
}
