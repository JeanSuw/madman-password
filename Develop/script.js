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

function generateDefaultPassword (numberOfChar, answerToLowerCase, answerToUpperCase, answerToNumbers, answerToSpecials){
  var defaultPassword = "";
  var expandedList = "";
  if (answerToLowerCase.toLowerCase() === "n" &&
      answerToUpperCase.toLowerCase() === "n" &&
      answerToNumbers.toLowerCase() === "n" &&
      answerToSpecials.toLowerCase() === "n"){
    // Set lowercase as result
    for(var i = 0; i < numberOfChar; i++){
      defaultPassword += lowercaseChar.charAt(Math.floor(Math.random() * lowercaseChar.length));
    }
    return defaultPassword;
  }else{
    if(answerToLowerCase.toLowerCase() === "y"){
      expandedList = expandedList + lowercaseChar;
    }
    if(answerToUpperCase.toLowerCase() === "y"){
      expandedList = expandedList + uppercaseChar;
    }
    if(answerToNumbers.toLowerCase() === "y"){
      expandedList = expandedList + numberChar;
    }
    if(answerToSpecials.toLowerCase() === "y"){
      expandedList = expandedList + specialChar;
    }
    for (var j = 0; j < numberOfChar; j++){
      defaultPassword += expandedList.charAt(Math.floor(Math.random() * expandedList.length));
    }
  }
  return defaultPassword;
}

function isNotYes (userInput){
  return userInput.toLowerCase() !== "y";
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
  var answersToFeatures = [];
  var newPassword = "";
  
  var userInputNumChar = askUserForCharLength();
  // prompted for character types to include in the password
  var answerToLowerCase = prompt("Do you want to include lower case? (y or n)");
  if (isNotYes){
    answersToFeatures.push("n");
  }else{
    answersToFeatures.push(answerToLowerCase.toLowerCase());
  }

  var answerToUpperCase = prompt("Do you want to include upper case? (y or n)");
  if (isNotYes){
    answersToFeatures.push("n");
  }else{
    answersToFeatures.push(answerToUpperCase.toLowerCase());
  }

  var answerToNumbers = prompt("Do you want to include numbers? (y or n)");
  if (isNotYes){
    answersToFeatures.push("n");
  }else{
    answersToFeatures.push(answerToNumbers.toLowerCase());
  }

  var answerToSpecials = prompt("Do you want to include special characters? (y or n)");
  if (isNotYes){
    answersToFeatures.push("n");
  }else{
    answersToFeatures.push(answerToSpecials.toLowerCase());
  }
  newPassword = generateDefaultPassword(answersToFeatures[0],answersToFeatures[1],answersToFeatures[2],answersToFeatures[3]);

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
