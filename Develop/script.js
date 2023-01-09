// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar, uppercaseChar, numberChar, specialChar;

lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numberChar = "0123456789";
specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"; 
//Note: Did not include " and \ symbols in specialChar, lest js will consider it as syntax error.

function generatePassword (){
  // prompted for length of the password
  var answer = prompt("How long do you want your password will be? (Character limits: 8-128 characters)");
  // prompted for character types to include in the password
  var answer = prompt("Do you want to include lower case?");
  var answer = prompt("Do you want to include upper case?");
  var answer = prompt("Do you want to include numbers?");
  var answer = prompt("Do you want to include special characters?");
  
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
