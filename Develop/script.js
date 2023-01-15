// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar, uppercaseChar, numberChar, specialChar;

lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numberChar = "0123456789";
specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//Note: Did not include " and \ symbols in specialChar, lest js will consider it as syntax error.

// a list checking if the number is within character limits (8 - 128)
function checkCharLimit(numberOfChar){
  return (numberOfChar >=8) && (numberOfChar < 128);
}

function isAtLeastOneType (numberOfChar, answerToLowerCase, answerToUpperCase, answerToNumbers, answerToSpecials){
  var defaultPassword = "";
  if (answerToLowerCase.toLowerCase() === "n" ||
      answerToUpperCase.toLowerCase() === "n" ||
      answerToNumbers.toLowerCase() === "n" ||
      answerToSpecials.toLowerCase() === "n"){
    // Set lowercase as result
    for(var i = 0; i < numberOfChar; i++)
    defaultPassword += characters.charAt(Math.floor(Math.random() * lowercaseChar));
  }
}

function askUserForCharLength(){
  var numberOfChar = prompt("How long do you want your password will be? (Character limits: 8-128 characters)");
  var isWithinCharLimit = checkCharLimit(numberOfChar);
  while (isWithinCharLimit !== true) {
    numberOfChar = prompt("Hey! Hey! It has to be within 8-128 characters! Try Again! How long do you want your password will be?");
    isWithinCharLimit = checkCharLimit(numberOfChar);
    if (isWithinCharLimit === true){
      break;
    }
    // Add if statement for cancel button
  }
  return numberOfChar;
}

function generatePassword (){
  // prompted for length of the password
  var userInputNumChar = askUserForCharLength();
  
  // prompted for character types to include in the password
  var answerToLowerCase = prompt("Do you want to include lower case? (y or n)");

  var answerToUpperCase = prompt("Do you want to include upper case? (y or n)");
  var answerToNumbers = prompt("Do you want to include numbers? (y or n)");
  var answerToSpecials = prompt("Do you want to include special characters? (y or n)");



  return "The Password!!!!"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
