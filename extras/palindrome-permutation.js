var isPalindromePermutation = function(str) {
  var freqMap = {};

  for (var i=0;i<str.length;i++) {
    var letter = str.charAt(i);
    var count = freqMap[letter];
    freqMap[letter] = count ? count+1 : 1;
  }

  var keys = Object.keys(freqMap);
  var countOdd = 0;
  for (var i=0;i<keys.length;i++) {
    var count = freqMap[keys[i]];
    if (count %2) countOdd++;
    if (countOdd > 1) return false;
  }
  return true;
}

// ----- test
var fn = isPalindromePermutation;
var samples = ["ab", "aaaaa", "abcabc", "abcabcd", "abcddabd", "abcabcabcabcd"]
samples.forEach(function(item) {
  console.log(item, fn(item)); 
})

