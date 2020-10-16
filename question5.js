// var question5 = [ 
//     {
//         prompt: `Finish the sentance - What ever the mind thinks...?
//         (a) Is destined for you
//         (b) You will achieve
//         (c) Will power will get it for you
//         (d) Is total fiction`,
//         answer: "b" || "c",
//     }
// ]
// export default question5;
document.body.style.backgroundColor = "white";

const targetButton = document.getElementById("button"); 
const targetQuestion5 = document.getElementById("question5")
targetButton.addEventListener("click", clickButton);
// the Dom research this ASAP & funtions (the way they work)

function clickButton() {
        }

// "theOptions"

// this is the JSON research more please Emma!!
var question5 = {
        prompt: "Finish the sentance - What ever the mind thinks...?",
            answers:  
                ["(a) Is destined for you",
                "(b) You will achieve",
                "(c) Will power will get it for you",
                "(d) Is total fiction"],
            answer: 1,
    }
// THE DOM!
document.getElementById("theQuestion").innerText=question5.prompt; 

// THE FOR LOOP CHILLLE!
for (i =0; i < question5.answers.length; i++) {
    var button=document.createElement("button"); //THE DOM HERE YOU SEE IT <--
    button.innerHTML =question5.answers[i];
    if (i === question5.answer) 
    {
    button.addEventListener("click", rightAnswer);
} else {button.addEventListener("click", wrongAnswer);
}
    
    document.getElementById("theOptions").appendChild(button);

}

function rightAnswer () {
    document.body.style.backgroundColor = "green"; 
    let score = parseInt(getCookie("quiz"))
    setCookie("quiz", (++score).toString(), 7)
    location.href = "marks.html";
}
function wrongAnswer () {
    document.body.style.backgroundColor = "red"; 
    location.href = "marks.html";
}