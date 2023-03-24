// Define character types
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "~!@#$%^&*()_+=-`{}|[]\:'<>?,./";

// Function to prompt for password criteria
function getPasswordCriteria() {
  var length = prompt("Enter the length of your password (between 8 and 128 characters):");
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    return getPasswordCriteria();
  }
  var lowercaseIncluded = confirm("Include lowercase letters?");
  var uppercaseIncluded = confirm("Include uppercase letters?");
  var numericIncluded = confirm("Include numeric characters?");
  var specialIncluded = confirm("Include special characters?");
  if (!lowercaseIncluded && !uppercaseIncluded && !numericIncluded && !specialIncluded) {
    alert("You must include at least one character type.");
    return getPasswordCriteria();
  }
  return {
    length: length,
    lowercase: lowercaseIncluded,
    uppercase: uppercaseIncluded,
    numeric: numericIncluded,
    special: specialIncluded
  };
}

// Function to generate a random password based on criteria
function generatePassword() {
  var criteria = getPasswordCriteria();
  var characters = "";
  var password = "";
  if (criteria.lowercase) {
    characters += lowercase;
  }
  if (criteria.uppercase) {
    characters += uppercase;
  }
  if (criteria.numeric) {
    characters += numeric;
  }
  if (criteria.special) {
    characters += special;
  }
  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

// Function to write password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Event listener for generate password button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);