var findCharWithMostConsecOccur = function (str) {
  var max = {c: undefined, n:0};
  var cur = {c: undefined, n:0};
  var prev = undefined;
  for (var i=0;i<str.length;i++) {
    cur.c = str.charAt(i);
    if (prev === cur.c) {
      cur.n++; 
    } else {
      cur.n = 1;
    }
    if (cur.n > max.n) {
       max.c = cur.c;
       max.n = cur.n;
    }
    prev = cur.c;
  }
  var result = {};
  result[max.c] = max.n;
  return result;
}

console.log(findCharWithMostConsecOccur("abbbjommmmblbq"));
