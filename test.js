let inputA = 1100;

function getDigits (inputA) {
  let arr = [];
  let str = inputA.toString();
  for (let i = 0; i < str.length; i++) {
     arr.push(str[i]);
  }
  return arr.map(Number);
}

console.log(getDigits());