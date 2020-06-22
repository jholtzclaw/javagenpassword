
 // Assignment code here
 var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ];
 var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z' ];
 var numberChar = ['1','2','3','4','5','6','7','8','9','0' ];
 var specialChar= ['!','@','#','$','%','^','&','*' ];
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
  
   // var password = generatePassword();
   var passwordLength = prompt("Please enter how long you want your password to be : Must be 8-128");
   while(passwordLength < 8 || passwordLength > 128) {
     alert("Incorrect length");
     var passwordLength = prompt("Please enter how long you want your password to be : Must be 8-128");
   }
 var lowercaseChar = confirm("Want lowercase character?");
    if(true) {
      alert("You have selected lowercase letters.")
    }
    else {
      alert("You've declined a lowercase letters")
    }
  var uppercaseChar = confirm("want uppercase?");
   if(true) {
     alert("You've selected uppercase letter")    
   }
  else {
    alert("You've declined uppercase letters")
  }
var numberChar = confirm("Want numbers?");
  if(true) {
    alert("You've selected numbers")
  }
else {
  alert("You've declined nuumbers")
}
var specialChar = confirm("Want special characters");
  if(true) {
    alert("You've selcted special characters")
  }
  else {
    alert("You've declined special characters")
  }
 
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 

 // Add event listener to generate button

 generateBtn.addEventListener("click", writePassword);
