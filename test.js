var string = 'Nice to meet you'
var search = ' ';
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++
  }
}

console.log(count); // 3