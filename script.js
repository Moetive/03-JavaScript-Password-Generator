// Assignment Code
var generateBtn = document.querySelector("#generate");
// letters numbers and characters for password
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "123456789";
var upper = lower.toUpperCase();
var characters =  "!#$%&'()*+,-./:;<=>?@^_`{|}~";

// combined variable of letters and numbers for password
var passcombo = "";
// final password after prompts
var finalpass="";

function generatePassword(){
  getpasslength();
  // confirm what to include lowercase, uppercase, numeric, and/or special characters
var confirmlower = confirm("Add lowercase?");
var confirmnumber = confirm("Add numbers?");
var confirmupper = confirm("Add uppercase?");
var confirmchar = confirm("Add characters?");
getRandomPassword()

 
 document.getElementById("password").value = password;
// trying to see what values they chose and if they dont select at least one itll bring them back
if (confirmlower === false && 
  confirmupper === false &&
  confirmnumber === false &&
  confirmchar === false){ 
    alert ("At least one character type must be selected");
  }
  return{
    passlength: passlength,
    confirmlower: confirmlower,
    confirmnumber:confirmnumber,
    confirmchar: confirmchar,
  };
}
// I wanted to begin with an array but I wasnt sure how to put it together
function getRandomPassword(array) {
  var randomIndex = Math.floor(Math.random()* array.length);
  var randomCharacter = array[randomIndex];
    return randomCharacter;

// generate certain passwords based on choices
if (generatePassword.confirmlower === true) {
  pickedCharacters = pickedCharacters.concat(lower);
  var randomCharacter = getRandomPassword(lower);
  guaranteedCharacters.push(randomCharacter);
}
if (generatePassword.confirmnumber === true) {
  pickedCharacters = pickedCharacters.concat(lower);
  var randomCharacter = getRandomPassword(lower);
  guaranteedCharacters.push(randomCharacter);
}
if (generatePassword.confirmupper === true) {
  pickedCharacters = pickedCharacters.concat(lower);
  var randomCharacter = getRandomPassword(lower);
  guaranteedCharacters.push(randomCharacter);
}
if (generatePassword.confirmchar === true) {
  pickedCharacters = pickedCharacters.concat(lower);
  var randomCharacter = getRandomPassword(lower);
  guaranteedCharacters.push(randomCharacter);
};

for (var i = 0; i < getpasslength; i++) {
  var randomCharacter = getRandomPassword(pickedCharacters);
  password.push(randomCharacter);
}
}
  

// get users password length
function getpasslength(){
  passlength = prompt("How long do you want your password? Eight Min and 128 Max Length");
  if (passlength >=8 && passlength <= 128) {
    return passlength;
  }
  else {
    alert("You must choose a number between 8 and 128");
    getpasslength()
    
  }
}

function getchartype(){

}


// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  if (password !== "") {
    passwordText.value = password;
  }
  else {
    passwordText.value = "";
    passwordText.placeholder = "Your Secure Password"
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
