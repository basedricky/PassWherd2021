function generatePassword() {
  // This portion sets the length of the password. The logic states that a number must be slected between 8-128.
var length = Number(prompt("How many characters would you like your password to be? (Must be bettwe 8-128 characters."));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  // This portion requires a confirmation of character requirement for the password to work.
var upper = confirm("Would you like to use uppercase letters?");
var lower = confirm("Would you like to use lowercase letters?");
var number = confirm("Would you like to use numbers?");
var symbol = confirm("Would you like to use special characters?");


while (!upper && !lower && !number && !symbol) {
  alert("You must select at least one character type!");
  upper = confirm("Would you like to use uppercase letters?");
  lower = confirm("Would you like to use lowercase letters?");
  number = confirm("Would you like to use numbers?");
  symbol = confirm("Would you like to use special characters?");
}


  // the password variable has been declared, but no value is assigned as the function will do that.
  var password = "";
  // the next section is the logic I was able to find. i found rando.js which helped with this logic
  // Once the requirements are confirmed, the function would take a random character from the allowed list, 
  // the function will continue to do this until  it has characters equal to the length of the password selected by the user
  // the password value is then created by the random sequence and written into the "password" field
  var allowed = {};
  if (upper) password += rando(allowed.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lower) password += rando(allowed.lower = "abcdefghijklmnopqrstuvwxyz");
  if (number) password += rando(allowed.number = "1234567890");
  if (symbol) password += rando(allowed.symbol = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}

// this next p ortion adds the event listener to my button

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
