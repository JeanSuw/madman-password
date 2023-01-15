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
    if (isWithinCharLimit === true){
      break;
    }
    // Add if statement for cancel button
  }
  return numberOfChar;
}

function askQuestions(numberOfChar){
  var expandedList = "";
  var defaultPassword = "";
  var countNo = 0;
  var question1 = "Do you want to include lower case?";
  var question2 = "Do you want to include upper case?";
  var question3 = "Do you want to include numbers?";
  var question4 = "Do you want to include special characters?";

  var userInput = confirm(question1);
  if (userInput == true){
    expandedList = expandedList + lowercaseChar;
  }else{
    countNo++;
    console.log("Lower cases are not included");
  }

  var userInput = confirm(question2);
  if (userInput == true){
    expandedList = expandedList + uppercaseChar;
  }else{
    countNo++;
    console.log("Upper cases are not included");
  }

  var userInput = confirm(question3);
  if (userInput == true){
    expandedList = expandedList + numberChar;
  }else{
    countNo++;
    console.log("Numbers are not included");
  }

  var userInput = confirm(question4);
  if (userInput == true){
    expandedList = expandedList + specialChar;
  }else{
    countNo++;
    console.log("special characters are not included");
  }

  // If the user click cancel to all of the options, the default password will set to lower case
  if (countNo === 4){
    console.log(countNo);
    for (var j = 0; j < numberOfChar; j++){
      defaultPassword += lowercaseChar.charAt(Math.floor(Math.random() * 26));
    }
  }else{
    for (var j = 0; j < numberOfChar; j++){
      defaultPassword += expandedList.charAt(Math.floor(Math.random() * expandedList.length));
    }
  }
  return defaultPassword;
}

function generatePassword (){
  var answersToFeatures = [];
  var newPassword = "";

  // prompted for length of the password
  var userInputNumChar = askUserForCharLength();
  
  // Asking users what type of characters will be include in their new password
  newPassword = askQuestions(userInputNumChar);
  
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
