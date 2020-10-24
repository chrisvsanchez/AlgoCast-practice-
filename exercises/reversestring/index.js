// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let strArr = str.split("");
  let result = [];
  console.log(strArr);
  for (let i = strArr.length - 1; i >= 0; i--) {
    result.push(strArr[i]);
  }
  return result.join("");
}
console.log(reverse("dcba"));

module.exports = reverse;
