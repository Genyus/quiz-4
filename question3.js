// var question3 = [ 
//     
//         prompt: `What is the longest river on earth?
//         (a) Amazon
//         (b) Yangtze
//         (c) Mississippi
//         (d) Nile
//         `,
//         answer: "d"
// 
// 
// export default question3;
document.body.style.backgroundColor = "white";

const targetButton = document.getElementById("button"); 
const targetQuestion1 = document.getElementById("question3")
targetButton.addEventListener("click", clickButton);
// the Dom research this ASAP & funtions (the way they work)

function clickButton() {
        }

// this is the JSON research more please Emma!!

const question3 = {
        prompt: "What is the longest river on earth?",
            answers:  
                ["(a) Amazon",
                "(b) Yangtze",
                "(c) Mississippi",
                "(d) Nile"],
            answer: 3,
    }
// THE DOM!
document.getElementById("theQuestion").innerText=question3.prompt; 

// THE FOR LOOP CHILLLE!
for (i =0; i < question3.answers.length; i++) {
    var button=document.createElement("button"); //THE DOM HERE YOU SEE IT <--
    button.innerHTML =question3.answers[i];
    if (i === question3.answer) 
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
    location.href = "question4.html";
}
function wrongAnswer () {
    document.body.style.backgroundColor = "red"; 
    location.href = "question4.html";
}