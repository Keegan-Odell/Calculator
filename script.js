//This group of varibables selcets the buttons from the HTML document
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const decimal = document.querySelector("#decimal");
const equalSign = document.querySelector("#equalSign");
const plusSign = document.querySelector("#plusSign");
const minusSign = document.querySelector("#minusSign");
const multiplicationSign = document.querySelector("#multiplicationSign");
const divideSign = document.querySelector("#divideSign");
const plusOrMinus = document.querySelector("#plusOrMinus");
const clear = document.querySelector("#clear");
const clearAll = document.querySelector("#clearAll");
const calculationContainer = document.querySelector("#calculationContainer");
const calculationChildren = calculationContainer.childNodes;
let a;
let b;
let equation;
let sign;
let answer;

//This group of functions adds event listeners to each button for when they are clicked

zeroNum = zero.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "0";
});

one.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "1";
});

two.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "2";
});

three.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "3";
});

four.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "4";
});

five.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "5";
});

six.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "6";
});

seven.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "7";
});

eight.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "8";
});

nine.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "9";
});

decimal.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += ".";
});

plusOrMinus.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += "-";
});

//These equation functions which will store the 1st number and mathematical sign and prepare for the 2nd number input

plusSign.addEventListener("click", storeNumber);
plusSign.addEventListener("click", clearNumbers);
plusSign.addEventListener("click", () => {
	let paragraph = document.getElementById("lastCalc");
	paragraph.textContent += `${a} + `;
	sign = "+";
	return sign;
});

minusSign.addEventListener("click", storeNumber);
minusSign.addEventListener("click", clearNumbers);
minusSign.addEventListener("click", () => {
	let paragraph = document.getElementById("lastCalc");
	paragraph.textContent += `${a} - `;
	sign = "-";
	return sign;
});

multiplicationSign.addEventListener("click", storeNumber);
multiplicationSign.addEventListener("click", clearNumbers);
multiplicationSign.addEventListener("click", () => {
	let paragraph = document.getElementById("lastCalc");
	paragraph.textContent += `${a} * `;
	sign = "*";
	return sign;
});

divideSign.addEventListener("click", storeNumber);
divideSign.addEventListener("click", clearNumbers);
divideSign.addEventListener("click", () => {
	let paragraph = document.getElementById("lastCalc");
	paragraph.textContent += `${a} ÷ `;
	sign = "/";
	return sign;
});

//This is where the calculations happen and where the clear and clear all functions appear

clear.addEventListener("click", clearNumbers);

clearAll.addEventListener("click", clearEverything);

equalSign.addEventListener("click", logB);
equalSign.addEventListener("click", writeEquation);
equalSign.addEventListener("click", calculate);
equalSign.addEventListener("click", clearEverything);
equalSign.addEventListener("click", () => {
	let paragraph = document.getElementById("test");
	paragraph.textContent += `${answer}`;
});

//Functions for certain tasks done on button clicks

function storeNumber() {
	a = document.getElementById("test").innerHTML;
	return a;
}

function clearNumbers() {
	let paragraph = document.getElementById("test").innerHTML;
	let clearNums = paragraph.replace(/[^a-z^A-Z]/g, "");
	document.getElementById("test").innerHTML = clearNums;
}

function clearEverything() {
	clearNumbers();
	let paragraph = document.getElementById("lastCalc").innerHTML;
	let clearIt = paragraph.replace(/[^a-z^A-Z]/g, "");
	document.getElementById("lastCalc").innerHTML = clearIt;
}

function logB() {
	b = document.getElementById("test").innerHTML;
	return b;
}

function writeEquation() {
	equation = `${a} ${sign} ${b}`;
	return equation;
}

function calculate() {
	answer = eval(equation);
	return answer;
}
