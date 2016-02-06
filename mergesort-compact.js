// --- merge helper function
// NOTE: this is a compact version that is less
// efficient than the "optimized" version by about 4x
var merge = function(left, right) {
  var result = [];
  while (left.length>0 && right.length>0) {
    result.push(left[0]<right[0]?left.shift():right.shift());
  }
  return result.concat(left, right);
}

// --- merge sort
var mergesort = function(a) {
  if (a.length <= 1) return a;
  var half = parseInt(a.length/2);
  var left = mergesort(a.slice(0,half));
  var right = mergesort(a.slice(half,a.length));
  return merge(left,right);
}

// ---------- test
var fn = mergesort;
var randarray = function(arr, n) {
  if (n===0) return arr;
  arr.push(Math.floor(Math.random()*100000));
  return randarray(arr, n-1);
}
var data = randarray([], 10000);
setTimeout(function() {
  var start = new Date().getTime();
  for (var i=0;i<20;i++) {
    fn(data);
  }
  console.log(new Date().getTime()-start);
}, 500);
