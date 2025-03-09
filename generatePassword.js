function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    if (length < 1) return "Invalid length";
    else if ((includeNumbers && includeSpecialChars) && length < 3) return "Invalid length";
    else if (includeNumbers && length < 2) return "Invalid length";
    else if (includeSpecialChars && length < 2) return "Invalid length";

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let special = "!@#$%^&*()";

    let totalChar = 0;
    let password = "";

    password += uppercase[Math.floor(Math.random() * 26)];
    totalChar++;

    if (includeNumbers) {
        password += numbers[Math.floor(Math.random() * 10)];
        totalChar++;
    }

    if (includeSpecialChars) {
        password += special[Math.floor(Math.random() * special.length)];
        totalChar++;
    }

    let eligible = uppercase + lowercase;
    if (includeNumbers) eligible += numbers;
    if (includeSpecialChars) eligible += special;

    for (let i = totalChar + 1; i <= length; i++) {
        let index = Math.floor(Math.random() * eligible.length);
        password += eligible[index];
    }

    return password;
}

// Example usage
let requiredPass = generatePassword(10, true, true);
console.log(requiredPass);
