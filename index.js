document.body.style.backgroundColor = "yellow";
​console.log(question1);
​
const divForQ1 = document.getElementById('question1');
​
divForQ1.innerHTML = `<h2>${question1.prompt}</h2>`;
​
divForQ1.addEventListener('click', function() {
  alert('The answer is: ' + question1.answer);
});

