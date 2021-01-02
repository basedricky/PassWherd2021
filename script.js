// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays for characters to be used in the generator.

var UpperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var LowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var SpecialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var NumbericalChar = [0,1,2,3,4,5,6,7,8,9];

function writePassword() {
 
  
 return result;
//  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}
console.log(writePassword(8));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
