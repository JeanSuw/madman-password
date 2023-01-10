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

function askUserForCharLength(){
  var numberOfChar = prompt("How long do you want your password will be? (Character limits: 8-128 characters)");
  var isWithinCharLimit = checkCharLimit(numberOfChar);
  while (isWithinCharLimit !== true) {
    numberOfChar = prompt("Hey! Hey! It has to be within 8-128 characters! Try Again! How long do you want your password will be?");
    isWithinCharLimit = checkCharLimit(numberOfChar);
    // Add if statement for cancel button
  }
}

function generatePassword (){
  // prompted for length of the password
  askUserForCharLength();
  
  // prompted for character types to include in the password
  var answer = prompt("Do you want to include lower case? (y or n)");

  var answer = prompt("Do you want to include upper case? (y or n)");
  var answer = prompt("Do you want to include numbers? (y or n)");
  var answer = prompt("Do you want to include special characters? (y or n)");



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
