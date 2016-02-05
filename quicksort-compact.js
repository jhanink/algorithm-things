// quicksort
var quicksort = function(a) {
  if (a.length <= 1) return a;
  var pivot = a[Math.floor(a.length/2)];
  var lt=[], gt=[], eq=[];
  a.forEach(item => {
    if (item<pivot) lt.push(item);
    if (item==pivot) eq.push(item);
    if (item>pivot) gt.push(item);
  })
  return quicksort(lt).concat(eq, quicksort(gt));
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
