// var question2 = [ 
//     {
//         prompt: `What Musical Artist became known as a symbol?
//         (a) Elton John
//         (b) DMX
//         (c) Celia Black
//         (d) Prince
//         `,
//         answer: "d"
//     }
// ]
// export default question2;
document.body.style.backgroundColor = "white";

const targetButton = document.getElementById("button"); 
const targetQuestion2 = document.getElementById("question2")
targetButton.addEventListener("click", clickButton);
// the Dom research this ASAP & funtions (the way they work)

function clickButton() {
        }

// "theOptions"

// this is the JSON research more please Emma!!
var question2 = {
        prompt: "What Musical Artist became known as a symbol?",
            answers:  
                    ["(a) Elton John",
                    "(b) DMX",
                    "(c) Celia Black",
                    "(d) Prince"],
            answer: 3,
    }
// THE DOM!
document.getElementById("theQuestion").innerText=question2.prompt; 

// THE FOR LOOP CHILLLE!
for (i =0; i < question2.answers.length; i++) {
    var button=document.createElement("button"); //THE DOM HERE YOU SEE IT <--
    button.innerHTML =question2.answers[i];
    if (i === question2.answer) 
    {
    button.addEventListener("click", rightAnswer);
} else {button.addEventListener("click", wrongAnswer);
}
    
    document.getElementById("theOptions").appendChild(button);

}

function rightAnswer () {
    document.body.style.backgroundColor = "green"; 
    location.href = "question3.html";
}
function wrongAnswer () {
    document.body.style.backgroundColor = "red"; 
    location.href = "question3.html";
}