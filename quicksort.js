// --- quicksort
var quicksort = function(a) {
  var left=0,right=a.length-1,pivot=a[Math.floor(right/2)];
  if (a.length <= 1) return a;
  // partition
  while (left < right) {
    while(a[left] < pivot) left++;
    while(a[right] > pivot) right--;
    if (left <= right) {
      var temp = a[left];
      a[left] = a[right];
      a[right] = temp;
      left++;
      right--;
    }
  }
  return quicksort(a.slice(0,left)).concat(quicksort(a.slice(left,a.length)));
}

// ----------  test
var fn = quicksort;
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
