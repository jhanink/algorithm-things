var findCharWithMostConsecOccur = function (str) {
  var max = {c: null, n:0};
  var cur = {c: null, n:0};
  var prev = null;
  for (var i=0;i<str.length;i++) {
    cur.c = str.charAt(i);
    cur.n = (prev === cur.c) ? cur.n+1 : 1;
    if (cur.n > max.n) {
      max = {c:cur.c, n:cur.n};
    }
    prev = cur.c;
  }
  var result = {};
  result[max.c] = max.n;
  return result;
}

console.log(findCharWithMostConsecOccur("abbbjommmmblbq"));
