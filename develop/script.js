// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowercaseChar
var uppercaseChar
var numberChar
var specialChar


// Arrays for letter, special characters, and numbers.
var lowercaseCharArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberCharArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*'];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  passwordLength = prompt("Please enter how long you want your password to be : Must be 8-128");
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect length");
    passwordLength = prompt("Please enter how long you want your password to be : Must be 8-128");
  }
  lowercaseChar = confirm("Want lowercase character?");
  if (lowercaseChar) {
    alert("You have selected lowercase letters.")
  }
  else {
    alert("You've declined a lowercase letters")
  }
  uppercaseChar = confirm("want uppercase?");
  if (uppercaseChar) {
    alert("You've selected uppercase letter")
  }
  else {
    alert("You've declined uppercase letters")
  }
  numberChar = confirm("Want numbers?");
  if (numberChar) {
    alert("You've selected numbers")
  }
  else {
    alert("You've declined numbers")
  }
  specialChar = confirm("Want special characters");
  if (specialChar) {
    alert("You've selcted special characters")

  }
  else {
    alert("You've declined special characters")

  }
  generatePassword()


}
//for loop array 
function generatePassword() {
  var passwordOptions = {
    length: passwordLength,
    hasLowercase: lowercaseChar,
    hasUppercase: uppercaseChar,
    hasNumbers: numberChar,
    hasSpecial: specialChar
  }

  var result = []
  var possibleChar = []
  var guaranteedChar = []

  if (passwordOptions.hasLowercase) {
    possibleChar = possibleChar.concat(lowercaseCharArr);
    guaranteedChar.push(getRandom(lowercaseCharArr))
  }

  if (passwordOptions.hasUppercase) {
    possibleChar = possibleChar.concat(uppercaseCharArr);
    guaranteedChar.push(getRandom(uppercaseCharArr))
  }

  if (passwordOptions.hasNumbers) {
    possibleChar = possibleChar.concat(numberCharArr);
    guaranteedChar.push(getRandom(numberCharArr))
  }

  if (passwordOptions.hasSpecial) {
    possibleChar = possibleChar.concat(specialCharArr);
    guaranteedChar.push(getRandom(specialCharArr))
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var possibleCharacter = getRandom(possibleChar)
    result.push(possibleCharacter)
  }

  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i]
  }


  var passwordText = document.querySelector("#password");

  passwordText.value = result.join("");
}

function getRandom(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length)
  var ranElement = arr[ranIndex]
  return ranElement
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
