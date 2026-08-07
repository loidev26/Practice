function calculate(num1, num2, operator) {
	
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		return "Please enter valid numbers";
	}

	if (!operator) {
		return "Please enter a valid operator";
	}

	switch (operator) {
		case "+":
			return num1 + num2;

		case "-":
			return num1 - num2;

		case "*":
			return num1 * num2;

		case "/":
			if (num2 === 0) {
				return "Cannot divide by zero";
			}

			return num1 / num2;

		default:
			return "Invalid operator";
	}
}

console.log(`The sum is: ${calculate(10, 5, "+")}`);
console.log(`The quotient is: ${calculate(10, 5, "/")}`);