// ----- fibonacci
var fib = function(n) {
  var memo = {};
  var fibb = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    var f = memo[n];
    if (typeof(f) === 'undefined') {
      memo[n] = fibb(n-1) + fibb(n-2);
    }
    return memo[n];
  };
  return fibb(n);
}

// ---------- test
console.log("fib(5)", fib(5));
console.log("fib(9)", fib(9));
console.log("fib(50)", fib(50));
console.log("fib(75)", fib(75));

