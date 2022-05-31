var x = 2;
var result;

if (x % 2) { // 1을 불리언값으로 변환하면 true이다. 2 % 2는 0 이므로 false가 출력된다.
  result = "홀수"; 
} else { // else문은 false값을 가질 시에 블록문이 실행된다.
  result = '짝수'; 
}

console.log(result); // 최종적으로 "짝수"가 출력된다.
