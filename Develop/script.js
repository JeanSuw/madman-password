var generateBtn = document.querySelector("#generate");

var lowercaseChar, uppercaseChar, numberChar, specialChar;

lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numberChar = "0123456789";
specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// a list checking if the number is within character limits (8 - 128)
function checkCharLimit(numberOfChar){
  return (numberOfChar >=8) && (numberOfChar < 128);
}

/**
 * Once the user click generate password, a prompt will pop up and ask for character limit for their password.
 * If the user enter numbers that is not within 8 to 128, then it will ask you continusly till you pick within given length.
 * @returns numberOfChar as user response to how many characters they want in their new password
 */
function askUserForCharLength(){
  var numberOfChar = prompt("How long do you want your password will be? (Character limits: 8-128 characters)");
  var isWithinCharLimit = checkCharLimit(numberOfChar);
  if (isWithinCharLimit !== true){
    alert ("Must be within character limit, Try again");
    return false;
  }else{
    return numberOfChar;
  }
}

/** 
 * Let users to press "ok" or "cancel" whether to include lowercase, uppercase, numeric, and/or special characters.
*/
function askQuestions(numberOfChar){
  var expandedList = defaultPassword = "";
  var countNo = 0; // Counting numbers of no's to each question

  var userInput = confirm("Do you want to include lower case?");
  if (userInput == true){
    expandedList = expandedList + lowercaseChar;
  }else{
    countNo++;
    console.log("Lower cases are not included");
  }

  var userInput = confirm("Do you want to include upper case?");
  if (userInput == true){
    expandedList = expandedList + uppercaseChar;
  }else{
    countNo++;
    console.log("Upper cases are not included");
  }

  var userInput = confirm("Do you want to include numbers?");
  if (userInput == true){
    expandedList = expandedList + numberChar;
  }else{
    countNo++;
    console.log("Numbers are not included");
  }

  var userInput = confirm("Do you want to include special characters?");
  if (userInput == true){
    expandedList = expandedList + specialChar;
  }else{
    countNo++;
    console.log("special characters are not included");
  }

  // If the user click cancel to all of the options, the default password will set to lower case
  if (countNo === 4){
    console.log(countNo);
    defaultPassword = alert("I'm starting over. Please choose a criteria.");

  // Otherwise, the passwords will generates according to users pressing ok buttons to certain questions
  }else{
    for (var j = 0; j < numberOfChar; j++){
      defaultPassword += expandedList.charAt(Math.floor(Math.random() * expandedList.length));
    }
  }
  return defaultPassword;
}

// Generate Password by having users interact with the prompts and messages
function generatePassword (){
  var newPassword = "";

  // prompted for length of the password
  var userInputNumChar = askUserForCharLength();
  if (userInputNumChar === false){
    alert("You may click the generate button to try again");
    generateBtn.addEventListener("click", writePassword);
  }else{
    // Asking users what type of characters will be include in their new password
    newPassword = askQuestions(userInputNumChar);
  }
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