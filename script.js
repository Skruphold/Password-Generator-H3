// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Adding a variable array for numbers, special characters, uppercase and lower case characters. 
  var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
  var specialcharArray = ["+", "=", "_", "-", "(", ")", "*", "&", "^", "%", "$", "#", "@", "!", "`", "~", ",", ".", "/", "?", "<", ">", ";", ":", "'", "[", "]", "{", "}", "|"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // blank arrays to concat when I write my conditions for the prompt.
  var passArray = [];
  var userArray = [];

  //prompts for the user.
  
  var passLength = prompt ("Between 8 and 128 characters, how many would you like?");
  // condition for pass length returns if less than 8 or more than 128.
  if (!(passLength >= 8 && passLength <= 128)) {
    alert("Please enter a value between 8 and 128!!!")
    return
    // generatePassword();
  } 
  var numerical = confirm ("Would you like your password to include numbers?");
  var upper = confirm ( "Would you like your password to include Upper case letters?");
  var lower = confirm ("Would you like your password to include any lower case letters?");
  var specialChar = confirm ("would you like your password to include any special characters?");

  // condition for the array.

  if (numerical){
    passArray = passArray.concat(numbersArray);
  }

  if (upper){
    passArray = passArray.concat(uppercaseArray);
  }

  if (lower){
    passArray = passArray.concat(lowercaseArray);
  }

  if (specialChar){
    passArray = passArray.concat(specialcharArray);
  }
  console.log(passArray)

  // for loop to randomly generate password.
  for (var i = 0; i < passLength; i++) {
    userArray.push (passArray[Math.floor(Math.random() * passArray.length)]);
  }
  // return the array as a string for randomly generated password.
  return userArray.join("");
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
