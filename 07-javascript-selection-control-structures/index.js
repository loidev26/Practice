function login(username, password, role) {

    if (!username || !password || !role) {
        return "Inputs must not be empty";
    } 

    switch(role) {

    case "admin": 
        return "Welcome back to the class portal, admin!";

    case "teacher":
        return "Thank you for logging in, teacher!";

    case "student":
        return "Welcome to the class portal, student!";

    default: return "Role out of range.";

    }    
}

function checkAverage(filipino, english, math, science) {
    let average = Math.round((filipino + english + math + science) / 4);
    
    console.log(average);

    if (average <= 74) {
        return `Hello, student, your average is ${average}. The letter equivalent is F`;
    } else if (average <= 79) {
        return `Hello, student, your average is ${average}. The letter equivalent is D`;
    } else if (average <= 84) {
        return `Hello, student, your average is ${average}. The letter equivalent is C`;
    } else if (average <= 89) {
        return `Hello, student, your average is ${average}. The letter equivalent is B`;
    } else if (average <= 95) {
        return `Hello, student, your average is ${average}. The letter equivalent is A`;
    } else if (average <= 100) {
        return `Hello, student, your average is ${average}. The letter equivalent is A+`;
    } else {
        return "Average out of range.";
    }
}


try{
    module.exports = {

        login: typeof login !== 'undefined' ? login : null,
        checkAverage: typeof checkAverage !== 'undefined' ? checkAverage : null

    }
} catch(err){

}
