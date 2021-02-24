// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//prompt to ask for the length of the password
// need four more prompts
// each prompt will be for each character type
// need to create a list where you will store each character type 
// need to create another list where you will store your main password
// special characters, numbers, lowercase, and uppercase
// each prompt is going to be a boolean
function generatePassword() {
  var specialCharacters = prompt("Would you like special characters? (y/n)")

  while (specialCharacters !== "yes" && specialCharacters !== "y" && specialCharacters !== "n" && specialCharacters !== "no"){
    specialCharacters = prompt("Invalid input. Please enter y/n.")
  }
  
  var num = prompt("Would you like to add numbers? (y/n)" )
  while (num !== "yes" && num !== "y" && num !== "n" && num !== "no"){
    num = prompt("Invalid input. Please enter y/n.")
  }
  var lowerCase = prompt("Do you want to add lowercase letters? (y/n)")
  while (lowerCase !== "yes" && lowerCase !== "y" && lowerCase !== "n" && lowerCase !== "no"){
    lowerCase = prompt("Invalid input. Please enter y/n.")
  }
  var upperCase = prompt("Do you want to add uppercase letters? (y/n)")
  while (upperCase !== "yes" && upperCase !== "y" && upperCase !== "n" && upperCase !== "no"){
    upperCase = prompt("Invalid input. Please enter y/n.")
  }
  var length = parseInt(prompt("How long do you want your password to be? (Enter a number between 8 and 128)"), 10);
  while ( length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Invalid input. Please enter a number between 8 and 128."))
  }

  var passwordOptions = {
    hasSpecialChar: (specialCharacters === "y" || specialCharacters === "yes"),
    hasNum:  (num === "y" || num === "yes"),
    hasLowerCase:  (lowerCase === "y" || lowerCase === "yes"),
    hasUpperCase:  (upperCase === "y" || upperCase === "yes")
  }

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")", "{", "}", "=", "!","<", ">", "|", ":", "-", "~", "[", "]" ]
  var all = numbers.concat(lowerLetters.concat(upperLetters.concat(specialChar)))
  var potentialPasswordChar = [];
  var password = [];

 while (password.length < length) {
  //potentialPasswordChar = all [Math.floor(Math.random() * all.length)], 
  //password.push(potentialPasswordChar)

    if (passwordOptions.hasSpecialChar) {
      potentialPasswordChar = specialChar [Math.floor(Math.random() * specialChar.length)], 
      password.push(potentialPasswordChar)
    }

    if (passwordOptions.hasNum) {
      potentialPasswordChar = numbers [Math.floor(Math.random() * numbers.length)], 
      password.push(potentialPasswordChar)
    }

    if (passwordOptions.hasLowerCase) {
      potentialPasswordChar = lowerLetters [Math.floor(Math.random() * lowerLetters.length)], 
      password.push(potentialPasswordChar)
    }
    
    
    if (passwordOptions.hasUpperCase) {
      potentialPasswordChar = upperLetters [Math.floor(Math.random() * upperLetters.length)], 
      password.push(potentialPasswordChar)
    }

  }
  alert("Here is your Password: " + password.join(''))  
}