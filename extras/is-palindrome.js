var isPalindrome = function(str) {
  return str.length <= 1
    ? true
    : (str.charAt(0) === str.charAt(str.length-1))
      && isPalindrome(str.substring(1,str.length-1));
};

// ---------- test
console.log("abc",isPalindrome("abc"));
console.log("abccba",isPalindrome("abccba"));
console.log("abcdcba",isPalindrome("abcdcba"));

