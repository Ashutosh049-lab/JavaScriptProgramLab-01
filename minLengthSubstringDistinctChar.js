
function minLengthSubstr(s) {
    let uniqueChars = new Set(s); // Find all unique characters in the string
    let requiredCount = uniqueChars.size; // Number of unique characters
    let charCount = new Map(); // Map to track character frequency
    let left = 0, minLength = Infinity, distinctCount = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        charCount.set(char, (charCount.get(char) || 0) + 1);

        if (charCount.get(char) === 1) {
            distinctCount++;
        }

        while (distinctCount === requiredCount) {
            minLength = Math.min(minLength, right - left + 1);
            let leftChar = s[left];
            charCount.set(leftChar, charCount.get(leftChar) - 1);

            if (charCount.get(leftChar) === 0) {
                distinctCount--;
            }
            left++;
        }
    }

    return minLength;
}


console.log(minLengthSubstr("zoomsessionmooz")); 