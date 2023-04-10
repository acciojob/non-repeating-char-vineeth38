//your JS code here. If required.
function firstNonRepeatedChar(str) {
  // Create a map to store character counts
  const charCounts = new Map();
  
  // Loop through the string to count characters
  for (const char of str) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  
  // Loop through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCounts.get(char) === 1) {
      return char;
    }
  }
  
  // If there's no non-repeated character, return null
  return null;
}
 
// Get user input
const userInput = prompt("Enter a string:");
 
// Call the function and display the output in an alert
const result = firstNonRepeatedChar(userInput);
if (result) {
  alert(`The first non-repeated character is "${result}".`);
} else {
  alert("There's no non-repeated character in the string.");
}