// Various Character Arrays
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

//Array created based on the answers to prompts by the user
var passwordPool = [];

//Creating new array containing the options(arrays) the user chose to include in the password
function generateChar() {
    if (confirmLower) {
        passwordPool.push(...lowerCaseChar);
    }
    if (confirmUpper) {
        passwordPool.push(...upperCaseChar);
    }
    if (confirmNumber) {
        passwordPool.push(...numericChar);
    }
    if (confirmSpecial) {
        passwordPool.push(...specialChar);
    }

generateChar();
console.log(passwordPool);

//Creates final array out of random characters from the pool that was created by the users option inputs.
function pushChar() {
    var randomPassword = [];
    for (var i = 0; i < pwLength; i++) {
        var item = passwordPool[Math.floor(Math.random() * passwordPool.length)];
        randomPassword.push(item);
}
return randomPassword;
}
var password = pushChar();


//validate that all of the conditions were met.

var checkUpper = (upperCaseChar.some(ele => password.includes(ele)))
var checkLower = (lowerCaseChar.some(ele => password.includes(ele)))
var checkNumeric = (numericChar.some(ele => password.includes(ele)))
var checkSpecial = (specialChar.some(ele => password.includes(ele)))

console.log(checkUpper);
console.log(checkLower);
console.log(checkNumeric);
console.log(checkSpecial);


if (checkUpper === confirmUpper &&
checkLower === confirmLower &&
checkNumeric === confirmSpecial &&
checkSpecial === confirmNumber) {
console.log(password);
} else {
    alert("somethings missing");
    console.log(pushChar()); //why won't this run??
}

//Presents randomly generated password to the user as a string. 
return password.join("");
}