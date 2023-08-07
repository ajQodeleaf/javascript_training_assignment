// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // An array to store the frequency of each alphabet letter (26 lowercase English alphabets)
  const frequencyArray = new Array(26).fill(0);

  /// Get the ASCII code of 'a'
  const aCharCode = "a".charCodeAt(0);
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char >= "a" && char <= "z") {
      const charIndex = char.charCodeAt(0) - aCharCode;
      frequencyArray[charIndex]++;
    }
  }

  // Convert the frequencyArray into an object with key-value pairs representing the alphabet letter and its frequency
  const frequencyObject = {};
  for (let i = 0; i < 26; i++) {
    const alphabetLetter = String.fromCharCode(aCharCode + i);
    frequencyObject[alphabetLetter] = frequencyArray[i];
  }

  return frequencyObject;
}


console.log("Frequency of characters = ",calculateFrequency("dummy"));
console.log("Frequency of characters = ",calculateFrequency("dummy text"));
console.log("Frequency of characters = ",calculateFrequency("shali is running fast"));
console.log("Frequency of characters = ",calculateFrequency("u@#d$fkj$#!kds"));