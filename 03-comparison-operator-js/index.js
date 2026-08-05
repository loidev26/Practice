let day = prompt("Enter a day:");

if(day === null || day.trim() === "") {
	console.log("Please enter a valid day!");
} else {
	day = day.trim().toLowerCase();

	displayDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

	if(day === "saturday" || day === "sunday") {
		console.log(`${displayDay}: Enjoy your weekend and take time to relax!`);
	} else {
		switch(day){
			case "monday": console.log(`${displayDay}: Back to school - let's start the week strong!`);
				break;

			case "tuesday": console.log(`${displayDay}: Taco ${displayDay} in the cafeteria!`);
				break;

			case "wednesday": console.log(`${displayDay}: Fun day - halfway to the weekend!`);
				break;

			case "thursday": console.log(`${displayDay}: Almost Friday - keep going!`);
				break;
				
			case "friday": console.log(`${displayDay}: Yay! Weekend is coming - have fun!`);
				break;

			default: console.log("Please enter a valid day!");
		}
	}
}
