function printOddNumbers(number) {
    let oddNumbers = "The odd numbers found are the following:";

    for (let i = 0; i < number; i++) {
        if (i > 10) {
            break;
        }

        if (i % 2 === 0) {
            continue;
        }

        console.log(`Continue and Break: ${i}`);

        oddNumbers += i === 1 ? ` ${i}` : `, ${i}`;
    }

    return oddNumbers;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateSalt(number) {
    let salt = "";

    for (let i = 0; i < number; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        salt += characters[randomIndex];
    }

    return salt;
}


function filterVowels(str) {
    const vowels = "aeiou";
    let filteredString = "";

    for (let i = 0; i < str.length; i++) {

        // includes() checks whether a string or an array contains a specified value.
        if (vowels.includes(str[i].toLowerCase())) {

            continue;
        }

        filteredString += str[i];
    }

    return filteredString;
}

function countLetterAndStop(word) {
    let aCount = 0;

    // for...of // for (const "variable name" of word) -> Loop through each letter in word, storing the current letter in the letter variable.
    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();

        if (letter === "d") {

            console.log("Stopping the loop, letter d is found.");
            break;

        } else if (letter === "a") {

            aCount++;
            
        }
    }

    return aCount;
}

function register(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    mobileNum,
    address,
    city,
    country
) {
    // helper function -> A small function that performs one specific task for another function.
    function isInvalidString(value) {
        return typeof value !== "string" || value.trim() === "";
    }

    if (isInvalidString(firstName)) {
        return "First name must be a string and not empty.";
    }

    if (isInvalidString(lastName)) {
        return "Last name must be a string and not empty.";
    }

    if (isInvalidString(email)) {
        return "Email must be a string and not empty.";
    }

    if (isInvalidString(password)) {
        return "Password must be a string and not empty.";
    }

    if (isInvalidString(confirmPassword)) {
        return "Confirm password must be a string and not empty.";
    }

    if (isInvalidString(mobileNum)) {
        return "Mobile number must be a string and not empty.";
    }

    if (mobileNum.length !== 11) {
        return "Mobile number must be 11 digits long.";
    }

    if (password !== confirmPassword) {
        return "Password and confirm password must match.";
    }

    return {
        firstName,
        lastName,
        email,
        password,
        mobileNum,
        address,
        city,
        country
    };
}

const newUser = register(
    "Nayeon",
    "Im",
    "nayeonie@gmail.com",
    "Nayeonnie21",
    "Nayeonnie21",
    "09123456789",
    "Seoul",
    "Seoul",
    "South Korea"
);

console.log(newUser);

function printPattern(numberOfRows) {
    let pattern = "";

    for (let i = 0; i < numberOfRows; i++) {
        pattern += "*";
        console.log(pattern);
    }
}

printPattern(10);




















