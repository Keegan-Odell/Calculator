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

//This group of functions adds event listeners to each button for when they are clicked

zero.addEventListener("click", () => {
	console.log(0);
});

one.addEventListener("click", () => {
	console.log(1);
});

two.addEventListener("click", () => {
	console.log(2);
});

three.addEventListener("click", () => {
	console.log(3);
});

four.addEventListener("click", () => {
	console.log(4);
});

five.addEventListener("click", () => {
	console.log(5);
});

six.addEventListener("click", () => {
	console.log(6);
});

seven.addEventListener("click", () => {
	console.log(7);
});

eight.addEventListener("click", () => {
	console.log(8);
});

nine.addEventListener("click", () => {
	console.log(9);
});

decimal.addEventListener("click", () => {
	console.log(".");
});

equalSign.addEventListener("click", () => {
	console.log("=");
});

plusSign.addEventListener("click", () => {
	console.log("+");
});

minusSign.addEventListener("click", () => {
	console.log("-");
});

multiplicationSign.addEventListener("click", () => {
	console.log("*");
});

divideSign.addEventListener("click", () => {
	console.log("/");
});

plusOrMinus.addEventListener("click", () => {
	console.log("+/-");
});

clear.addEventListener("click", () => {
	console.log("clear");
});

clearAll.addEventListener("click", () => {
	console.log("clearALL");
});

//This is where the calculations happen
