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
   if (passwordLength.length < 8) {
     alert("Your password must be at least 8 characters long")
   }
   if (passwordLength.length > 128) {
     alert("Your password must be less than 128 characters long")
   }
   
 
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
  
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);