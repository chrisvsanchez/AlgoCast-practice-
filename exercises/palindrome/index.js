// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ---First solution --------
// function palindrome(str) {
//   let strArr = str.split("");
//   let reversed = "";
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     reversed += strArr[i];
//   }

//   return str === reversed ? true : false;
// }
// ---second solution --------

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
palindrome("abba");
module.exports = palindrome;
