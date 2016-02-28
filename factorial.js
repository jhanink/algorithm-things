// --- gcd
var factorial = function(n) {
  return n < 1
    ? 1 : n * factorial (n-1);
}

// ---------- test
console.log("factorial(2)", factorial(2));
console.log("factorial(5)", factorial(5));

