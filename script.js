var generateBtn = document.querySelector("#generate");
function getPassword() {
    
// Variables for the passwords characters
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var multiSelect = "";
    var randomKey = "";

//First pop up window will allow the user to select a password length between 8 to 128 characters long.
    var keyLength = prompt(
        "The Password must be between 8 to 128 characters long."
    );
    
// If the selected number is out of range for password criteria
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("The password does not meet the critia. Enter a number from 8 - 128.");        
        return;

// Variable Prompts. THese characters will make up the eventual password
    } else {
    var upperAlpha = confirm("Your password will contain uppercase letters, please click ok to continue");
    var lowerAlpha = confirm("Your password will contain lowercase letters, please click ok to continue");
    var numericOptions = confirm("Your password will contain numbers, please click ok to continue");
    var specialSymbols = confirm("Your password will contain symbols, please click ok to continue");
    }

    if (upperAlpha) {multiSelect += uppercaseABC;}
    if (lowerAlpha) {multiSelect += lowercaseABC;}
    if (numericOptions) {multiSelect += numeric;}
    if (specialSymbols) {multiSelect += symbols;} 

// This prompt will congratulate user on making a password, reminding them highlight and copy their password
alert("Congrats! Your unique password has been created! Be sure to highlight the password and right click to copy!")

// THe for loop  is for the user to repeat if criteria is not met.
    for (i = 0; i < keyLength; i++) {

// Random password has generated
        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}

// Write password to the #password input
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
    

      

    