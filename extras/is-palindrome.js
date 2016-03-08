var isPalindrome = function(str) {
  return str.length <= 1
    ? true
    : (str.charAt(0) === str.charAt(str.length-1))
      && isPalindrome(str.substring(1,str.length-1));
};

// ---------- test
console.log("isPalindrome recursive");
console.log("abc",isPalindrome("abc"));
console.log("abccba",isPalindrome("abccba"));
console.log("abcdcba",isPalindrome("abcdcba"));

var isPalindrome2 = function(str) {
  var half = Math.floor(str.length/2);
  for (var i=0;i<half;i++) {
    if (str.charAt(i) !== str.charAt(str.length-1-i)) return false;
  }
  return true;
};

console.log("\nisPalindrome iterative");
console.log("abc",isPalindrome2("abc"));
console.log("abccba",isPalindrome2("abccba"));
console.log("abcdcba",isPalindrome2("abcdcba"));

