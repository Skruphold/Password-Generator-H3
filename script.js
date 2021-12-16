// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Adding a variable array for numbers, special characters, uppercase and lower case characters. 
  var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
  var specialcharArray = ["+", "=", "_", "-", "(", ")", "*", "&", "^", "%", "$", "#", "@", "!"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // blank arrays to concat when I write my conditions for the prompt
  var passArray = [];
  var userArray = [];

  //prompts for the user.
  
  uppercaseArray [1]
    var passLength = prompt ("Between 8 and 128 characters, how many would you like?");
    var numerical = confirm ("Would you like your password to include numbers?");
    var upper = confirm ( "Would you like your password to include Upper case letters?");
    var lower = confirm ("Would you like your password to include any lower case letters?");
    var specialChar = confirm ("would you like your password to include any special characters?");

  // condition for the array

  if (!(passLength >=8 && passLength <=128)) {
      alert("Please enter a value between 8 and 128!!!");
  } else {
    numerical = confirm("Would you like your password to include numbers?");
    upper = confirm("Would you like your password to include Upper case letters");
    lower = confirm("Would you like your password to include any lower case letters?");
    specialChar = confirm("would you like your password to include any special characters?");
  };  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
