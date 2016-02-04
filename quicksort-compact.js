// quicksort
var quicksort = function(a) {
  var pivot = a[Math.floor(a.length/2)];
  var lt=[], gt=[], eq=[];
  for (var i=0;i<a.length;i++) {
    if (a[i]<pivot) lt.push(a[i]);
    if (a[i]==pivot) eq.push(pivot);
    if (a[i]>pivot) gt.push(a[i]);
  }
  return lt.sort().concat(eq, gt.sort());
}

// ---------- test
var randarray = function(arr, n) {
  if (n===0) return arr;
  arr.push(Math.floor(Math.random()*100000));
  return randarray(arr, n-1);
}

var a = new Date().getTime();
console.log(quicksort(randarray([], 10000)))
console.log("time:", new Date().getTime()-a)
