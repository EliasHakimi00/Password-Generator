// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  var special = confirm("Click OK to include special characters.");
  var numeric = confirm("Click OK to include numeric characters.");
  var lower = confirm("Click OK to include lowercase characters.");
  var upper = confirm("Click OK to include uppercase characters.");

  // store user input in an object
  var passwordOptions = {
    length: length,
    special: special,
    numeric: numeric,
    lower: lower,
    upper: upper
  };

  return passwordOptions;
}

// function to generate a random password
function generatePassword() {
  var options = getPasswordOptions();
  var possibleCharacters = [];
  var password = "";

  // if user wants to include special characters, add them to possibleCharacters array
  if (options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // if user wants to include numeric characters, add them to possibleCharacters array
  if (options.numeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }

  // if user wants to include lowercase characters, add them to possibleCharacters array
  if (options.lower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }

  // if user wants to include uppercase characters, add them to possibleCharacters array
  if (options.upper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  if(!options.upper && !options.lower && !options.numeric && !options.special) {
    alert("Choose at least one character type.");
    return
  }

  // generate the password
  for (var i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);