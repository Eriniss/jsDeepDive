function print (i) {
  console.log(i);
}

function initiation (n, f) {
  for (var i = 1; i <= n; i++) {
    f(i);
  }
}

initiation(5, print);