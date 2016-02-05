// --- flatten nested arrays
var flatten = function(arr) {
  return arr.reduce(function(out, ith) {
    return out.concat(Array.isArray(ith)?flatten(ith):ith);
  }, []);
}

console.log(flatten([1,2,[3,4,[5,6,7],8,[9]], [10]]));
