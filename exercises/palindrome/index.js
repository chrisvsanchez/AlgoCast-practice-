// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let strArr = str.split("");
  let reversed = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversed += strArr[i];
  }

  return str === reversed ? true : false;
}
palindrome("abba");
module.exports = palindrome;
