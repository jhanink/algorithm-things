// merge helper function
var merge = function(left, right) {
  var result = [];
  var L=0;R=0;
  while (L < left.length && R < right.length) {
    if (left[L] < right[R]) {
      result.push(left[L]);
      L++;
    } else {
      result.push(right[R]);
      R++;
    }
  }
  return result.concat(left.slice(L,left.length), right.slice(R,right.length));
}

// merge sort
var mergesort = function(a) {
  if (a.length <= 1) return a;
  var half = parseInt(a.length/2);
  var left = mergesort(a.slice(0,half));
  var right = mergesort(a.slice(half,a.length));
  return merge(left,right);
}


// ---------- test
var fn = mergesort
var randarray = function(arr, n) {
  if (n===0) return arr;
  arr.push(Math.floor(Math.random()*100000));
  return randarray(arr, n-1);
}
console.log(fn(randarray([],20)));
var data = randarray([], 10000);
setTimeout(function() {
  var start = new Date().getTime();
  for (var i=0;i<20;i++) {
    fn(data);
  }
  console.log(new Date().getTime()-start);
}, 500);
