// --- helper merge function
var merge = function(left, right) {
  var result=[];
  while (left.length>0 && right.length>0) {
    result.push(left[0]<right[0]?left.shift():right.shift());
  }
  return result.concat(left).concat(right);
}

// --- merge sort
var mergesort = function(a) {
  if (a.length <=1) return a;
  var half = parseInt(a.length/2);
  var left = mergesort(a.slice(0,half));
  var right = mergesort(a.slice(half,a.length));
  return merge(left,right);
}


// ---------- test
var randarray = function(arr, n) {
  if (n===0) return arr;
  arr.push(Math.floor(Math.random()*100));
  return randarray(arr, n-1);
}

console.log(merge([3,5,8], [1,2,7,12]));
console.log(mergesort(randarray([],20)));
