// NOTE: this impl avoids resizing the result array
// and creating partial copies that would be incurred
// when using native push(), shift(), and slice().
// This has an 8x advantage over the compact version.

// --- merge sort
var mergesort = function(a) {
  var merge = function(left, right) {
    var result = new Array(left.length+right.length);
    var L=0,R=0,idx=0;
    while (L < left.length && R < right.length) {
      if (left[L] < right[R]) {
        result[idx++] = left[L++];
      } else {
        result[idx++] = right[R++];
      }   
    }
    for (var i=L;i<left.length;i++) {
      result[idx++] = left[i];
    }
    for (var i=R;i<right.length;i++) {
      result[idx++] = right[i];
    }
    return result;
  }
  return (function ms(a, low, high) {
    if (low === high) return [a[low]];
    var half = parseInt((high-low)/2);
    var left = ms(a, low, low+half);
    var right = ms(a, low+half+1, high);
    return merge(left, right);
  })(a, 0, a.length-1);
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
