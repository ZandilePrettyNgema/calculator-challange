let num1 = 10;
let num2 = 2;
let answerEl = document.getElementById("sum-el");
let signEl = document.getElementById("sign-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  let sum = num1 + num2;
  signEl.innerHTML = "+";
  answerEl.innerHTML = "Sum = " + sum;
}
function subtract() {
  let sum = num1 - num2;
  signEl.innerHTML = "-";
  answerEl.innerHTML = "Sum = " + sum;
}
function divide() {
  let sum = num1 / num2;
  signEl.innerHTML = "/";
  answerEl.innerHTML = "Sum = " + sum;
}
function multiply() {
  let sum = num1 * num2;
  signEl.innerHTML = "x";
  answerEl.innerHTML = "Sum = " + sum;
}
