
var findMatchesInSortedArrays = function(a,b) {
  var L=0,R=0,result=[];
  while (L < a.length && R < b.length) {
    if (a[L] === b[R]) {
      result.push(a[L]);
      L++;
      R++
    } else if (a[L] < b[R]) {
      L++;
    } else {
      R++
    }
  }
  return result;
}

console.log("expect [ 12, 25, 60 ]",
            "\nresult",
            findMatchesInSortedArrays(
              [3,7,12,20,25,40,60,70],
              [1,8,12,13,14,19,25,60,65]))
