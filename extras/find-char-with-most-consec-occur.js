var findCharWithMostConsecOccur = function (str) {
  var max = {c: null, n:0};
  var cur = {c: null, n:0};
  for (var i=0;i<str.length;i++) {
    var next = str.charAt(i);
    cur.n = (next === cur.c) ? cur.n+1 : 1;
    cur.c = next;
    max = (cur.n>max.n) ? {c:cur.c, n:cur.n} : max;
  }
  var result = {};
  result[max.c] = max.n;
  return result;
}

console.log(findCharWithMostConsecOccur("abbbjommmmblbq"));
