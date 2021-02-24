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
  var specialCharacters = prompt("Would you like special characters?")
  var num = prompt("Would you like to add numbers?")
  var lowerCase = prompt("Do you want to add lowercase letters?")
  var upperCase = prompt("Do you want to add uppercase letters?")
  var length = parseInt(prompt("How long do you want your password to be? (Enter a number)"), 10);

  var passwordOptions = {
    hasSpecialChar: specialCharacters,
    hasNum: num,
    hasLowerCase: lowerCase,
    hasUpperCase: upperCase
  }
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")", "{", "}", "=", "!","<", ">", "|", ":", "-", "~", "[", "]", "\\"]
  
  var potentialPasswordChar = [];
  var password = [];
  password.length = length

  if (passwordOptions.hasSpecialChar) {
    potentialPasswordChar.concat(specialChar), 
    password.push(Math.floor(Math.random() * specialChar.length))
  }

  if (passwordOptions.hasNum) {
    potentialPasswordChar.concat(numbers), 
    password.push(Math.floor(Math.random() * numbers.length))
  }

  if (passwordOptions.hasLowerCase) {
    potentialPasswordChar.concat(lowerLetters), 
    password.push(Math.floor(Math.random() * lowerLetters.length))
  }
  
  
  if (passwordOptions.hasUpperCase) {
    potentialPasswordChar.concat(upperLetters), 
    password.push(Math.floor(Math.random() * upperLetters.length))
  }

 while (potentialPasswordChar.length < password.length) {
  var newLength = password.length - potentialPasswordChar;
  password.push(Math.floor(Math.random() * newLength))
  }

password.join();

}