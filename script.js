const input = document.getElementById('input');
let decimal = false;
let numberMemory;
let operationMemory = "";
let isNumberStart = false;


function insert(number) {
	if(isNumberStart == true) {
		input.value = "";
		isNumberStart = false;
	}

	if (number === '.') {
		if (decimal == false) {
			input.value = input.value + '.';
			decimal = true;
		}
	} else {
		input.value = input.value + number;
	}
}
function count(operation) {
	numberMemory = Number(input.value);
	operationMemory = operation;
	isNumberStart = true;
	decimal = false;
}
function equal() {
	if (operationMemory != "") {
		if (operationMemory == "+") {
			input.value = numberMemory + Number(input.value);
			numberMemory = "";
			operationMemory = "";
			isNumberStart = true;
		} else if (operationMemory == "-") {
			input.value = numberMemory - Number(input.value);
			numberMemory = "";
			operationMemory = "";
			isNumberStart = true;
		} else if (operationMemory == "*") {
			input.value = numberMemory * Number(input.value);
			numberMemory = "";
			operationMemory = "";
			isNumberStart = true;
		} else if (operationMemory == "/") {
			input.value = numberMemory / Number(input.value);
			numberMemory = "";
			operationMemory = "";
			isNumberStart = true;
		} 
	}
}
function square() {
	if(Number(input.value) >= 0) {
		input.value = Math.sqrt(Number(input.value));
	} else {
		input.value = "error";
	}	
	isNumberStart = true;
}
function sinus() {
		input.value = Math.sin(Number(input.value));
		isNumberStart = true;
}
function back() {
	input.value = input.value.substr(0, input.value.length-1);
}
function clean() {
	input.value = "";
}
function negative() {
	if (input.value == "" || isNumberStart == true) {
		isNumberStart = false;
		input.value = "-";
	}
}