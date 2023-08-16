// Assignment Code
var generateBtn = document.querySelector("#generate");

// A function to get the password
    function getPassword() {
    
// Password variables for allowable passwords characters
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var multiSelect = "";
    var randomKey = "";

//First prompt to allow end-user to select a password length between 8 to 128 characters long.
    var keyLength = prompt(
        "The Password must be between 8 to 128 characters long."
    );
    
// If the selected number is out of range for password criteria
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("The password does not meet the critia. Enter a number from 8 - 128.");        
        return;

// Variable Prompts. Once the end user successfully enters a valid numberor value, this prompt will notify them that their password will contain the following characters when the random key is finally generated
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

// For loop to repeat if criteria is not met and will end once password is generated. 
    for (i = 0; i < keyLength; i++) {

// Final random password has generated
        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}

// Write password to the #password input. The text box area where the newly generated password will appear.
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
}

// Add event listener to generate button. This is a Call To Action (CTA button)
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
    

      

    