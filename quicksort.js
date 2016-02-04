// quicksort
var quicksort = function(a) {
  var left=0,right=a.length-1,pivot=Math.floor(right/2);
  if (right-left < 1) return a;
  // partition
  while (left < right) {
    while(a[left]<a[pivot]) {
      left++;
    }
    while(a[right]>a[pivot]) {
      right--;
    }
    if (left<=right) {
      a[left] = a.splice(right,1,a[left])[0]; // swap
      left++;
      right--
    }
  }
  // sort left and right partitions
  return quicksort(a.slice(0,left)).concat(quicksort(a.slice(left,a.length)));
}

// ----------  test
var randarray = function(arr, n) {
  if (n===0) return arr;
  arr.push(Math.floor(Math.random()*100000));
  return randarray(arr, n-1);
}

var a = new Date().getTime();
console.log(quicksort(randarray([], 10000)))
console.log("time:", new Date().getTime()-a)
