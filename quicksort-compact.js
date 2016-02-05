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
var fn = quicksort
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
