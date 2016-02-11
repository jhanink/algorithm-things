// find the single non-repeating number
// [1,1,2,2,5,6,7,6,5,8,8,0,0]
var findNonRepeatingNumber = function(a) {
  var candidates = {};
  for (var i=0;i<a.length;i++) {
    var item = a[i];
    if (candidates[item]===undefined) {
      candidates[item] = item;
    } else {
      delete candidates[item];
    }
  }
  return Object.keys(candidates)[0];
}

// ---------- test
console.log(findNonRepeatingNumber([1,1,2,2,5,6,7,6,5,8,8,0,0]))


