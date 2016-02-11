var genPerms = function(a) {
  if (a.length === 1) return [a];
  var last = a.slice(-1);
  var nextPerms = genPerms(a.slice(0,-1));
  var perms = [];
  for (var i=0;i<nextPerms.length;i++) {
    var next = nextPerms[i];
    for (var j=0;j<=next.length;j++) {
      perms.push(next.slice(0,j) + last + next.slice(j,next.length));
    }
  }
  return perms;
}

console.log(genPerms("abcd"))
