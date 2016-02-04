// --- gcd
var gcd = function (x,y) {
  if (y>x) return gcd(y,x);
  var rem = x%y;
  if (rem === 0) return y;
  return gcd(y, rem);
}

// ---------- test
console.log("gcd(8,4)", gcd(8,4));
console.log("gcd(7,4)", gcd(7,4));
console.log("gcd(16,24)", gcd(16,24));
