// * 연산자


// 7.1 산술 연산자

// 7.1.1 이항 산술 연산자

{
"+" // 덧셈
"-" // 뺄셈
"*" // 곱셈
"/" // 나눗셈
"%" // 나머지
}


// 7.1.2 단항 산술 연산자

{
"++" // 증가
"--" // 감소
}


{
var x = 1;

x++; // 2, x = x + 1과 동일하다.
x--; // 1, x = x - 1과 동일하다.
}
// 단항 산술 연산자는 위치에 따라 의미가 있다.
// 피연산자 앞에 위치할 경우 피연산자의 값을 먼저 증가/감소시킨 후, 다른 연산을 수행한다.
// 피연산자 뒤에 위치할 경우 다른 연산을수행한 후, 피연산자의 값을 증가/감소 시킨다.


{
var x = 5, result;

result = x++; // 선할당 후증가
console.log(result, x); // 5 6

result = ++x; // 선증가 후할당
console.log(result, x);
}
// 단항 연산자에 +를 할당할 경우 값을 숫자 타입으로 변환하여 반환한다.


{
var x = '1';

console.log(+x); // 1
console.log(x); // "1"

var x = true;

console.log(+x); // 1
console.log(x); // true

var x = false; 

console.log(+x); // 0
console.log(x); // false

var x = 'Hello World'

console.log(+x); // NaN
console.log(x); // 'Hello World"
}



// 마찬가지로 단항 연산자에 -를 할당할 경우 문자열에서 숫자열로 변환하지만 부호를 반전하여 출력한다.

{
var x = "10";

console.log(-x); // -10
console.log(x) // "10"
}


// 7.1.3 문자열 연결 연산자

// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.

{
'1' + 2; // '12'
1 + '2'; // '12'

1 + true; // 2
1 + false; // 1

1 + null; // 1
1 + undefined // NaN
}


// 7.2 할당 연산자

{
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0
}


{
var str = "My name is "

str += "Hong"; // str = str + "Hong"
console.log(str); // "My name is Hong"
}


// 7.3 비교 연산자

// 7.3.1 동등/일치 비교 연산자

{
"==" // 동등 비교
"===" // 일치 비교
"!=" // 부동등 비교
"!==" // 불일치 비교

5 == '5' // true, 자동으로 형변환을 하여 타입을 일치시킨다.
5 === '5' // false, 일치의 경우 서로의 타입이 맞지 않으면 false가 출력된다. 대부분의 조건문에선 일치를 사용한다.
}


// 동등 비교의 경우 결과를 예측하기 어려워 주로 일치 비교를 사용한다.


{
NaN === NaN // false, NaN은 자신과 일치하지 않는 유일한 값이다.
}


// 7.3.2 대소 관계 비교 연산자

{
"x>1" // x는 1보다 크다.
"x<1" // x는 1보다 작다.
"x>=1" // x는 1보다 같거나 크다.
"x<=1" // x는 1보다 같거나 작다.
}


// 7.4 삼항 조건 연산자

// 삼항 조건식의 구성은 다음과 같다.


{
var result = score >= 60 ? 'pass' : 'fail';
}
// 변수이름 할당, 조건식, 반환할 값들로 구성되어있다.
// 먼저 조건식에서 true가 반환될 경우 첫 번째 피연산자인 'pass'가 반환된다.
// 만약 조건식에서 false가 반환될 경우 두 번째 피연산자인 'fail'이 반환된다.


{
var x = 2;

var result = x % 2 ? '홀수' : '짝수'; 
// 조건식에서 2 % 2 는 0이므로 false가 반환되며 이는 두 번째 피연산자인 '짝수'를 반환한다.
console.log(x); // 짝수
}


// 이를 if else 문으로 구성하면 다음과 같다.

{
var x = 2, result;

if (x % 2) {result = '홀수';
} else {result = '짝수';}

console.log(result); // 짝수
}
// 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if...else 문은 표현식이 아니므로 값처럼 사용할 수 없다.
// 이러한 이유로 삼항 조건 연산자 표현식은 매우 유용하게 쓰인다.


{
  var x = 4; 
  
  var result = (x % 4 === 0) ? '4의 약수' : '4의 약수가 아니다'; 
  // 조건식에서 4 % 4 는 0이므로 true가 반환되며 이는 첫 번째 피연산자인 '4의 약수'를 반환한다.
  console.log(result); // 4의 약수
}


{
var x = 10;

var result = x % 2 ? '짝수' : '홀수';
console.log(result); // 짝수
}


// 7.5 논리 연산자


{
"||" // OR 스위치
"&&" // AND 스위치
"!" // 부정
}


// OR 스위치는 우황과 좌황 중 하나라도 true라면 결과값이 true로 반환된다.

{
false || true; // true
false || false; // false
}


// AND 스위치는 우황과 좌황 모두 true여야만 결과값이 true로 반환된다.

{
true && false; // false
true && true; // true
}


// 논리 부정은 불리언 결과값을 반대로 뒤집는다. 만약 피연산자가 불리언 값이 아니라면 불리언 타입으로 암묵적 타입 변환된다.

{
!true; // false
!false; // true
!0; // true
!"Hello"; // false
}


// 7.6 쉼표 연산자

// 쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.

{
var x, y, z;

x = 1, y = 2, z = 3; // 3
}


// 7.7 그룸 연산자

// 그룸연산자()를 사용하여 연산의 우선순위를 설정할 수 있다.


// 7.8 typeof 연산자

// typeof 연산자는 피연산자의 데이터타입을 문자열로 반환한다.

{
typeof ""; // string
typeof NaN; // number
typeof undefined; // undefined
typeof null; // object
typeof function () {}; // function
}


// 7.9 지수 연산자

// ES6에서 새로 등장한 지수연산자는 다음과 같다.

{
2 ** 2; // 4, 2의 2제곱이다.
2 ** 2.5; // 5.657..., 2의 2.5제곱이다.
}


// 이를 ES5에서 사용한 Math.pow로 나타내면 다음과 같다.

{
Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.657...
}


// 음수를 거듭제곱의 밑으로 사용해 계산하려면 ()로 묶어서 사용해야 한다.

{
(-5) ** 2; // 25
}


// 7.12 연산자 우선순위

{
"1. ()"
"2. new(매개변수 존재), ., [](프로퍼티접근), ()(함수호출), ?.(옵셔널 체이닝 연산자)"
"3. new(매개변수 미존재)"
"4. x++, x--"
"5. !x, +x, -x, ++x, --x, typeof, delete"
"6. **"
"7. *, /, %"
"8. +, -"
"9. <, >, <=, >=, in, instanceof"
"10. ==, !=, ===, !=="
"11. ??(null 병합 연산자)"
"12. &&"
"13. ||"
"14. ? ... : ...(삼항 연산자)"
"15. 할당연산자(=, +=, -=, ..."
"16. ,"
}


// 7.13 연산자 결합 순서

// 추후에 서술


// * 제어문

// 제어문을 사용할 경우 코드의 실행 흐름을 인위적으로 제어할 수 있다.
// 하지만 코드의 실행 흐름을 제어한다는 것은 코드의 흐름을 이해하기 어렵게 만들어 가독성을 해치는 단점이 있다.


// 8.1 블록문

// 블록문이란 0개 이상의 문을 중괄호로 묶은 것이다.
// 블록문은 언제나 자체종결성을 가지는 특성때문에 끝에 세미콜론을 붙이지 않는다.

{
{var x = 61;} // 블록문, 블록문 끝엔 세미콜론을 붙이지 않는다.

for (var i = 0; i < 10; i++) {
  console.log("반복문을 10번 출력합니다.");
} // 반복문

function print () {
  console.log("함수를 사용해 문자열을 출력합니다.");
} // 함수선언문
}


// 8.2 조건문

// 조건문(conditional statement)은 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다.


// 8.2.1 if ... else문

// 조건식의 평가 결과가 true일 경우 if 문의 코드 블록이 실행되고, false일 경우 else 문의 코드 블록이 실행된다.

{
var num = 2;
var kind;

if (num > 0) {
  kind = '양수'; // 2 > 0 이므로 true을 출력한다. true 출력시 블록문이 실행된다.
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '0';
}

console.log(kind); // kind = '양수'가 출력되고 반복문이 종료되므로 최종적으로 '양수'가 출력된다.
}


// 대부분의 if ... else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

{
var x = 2;
var result;

if (x % 2) { // 1을 불리언값으로 변환하면 true이다. 2 % 2는 0 이므로 false가 출력된다.
  result = "홀수"; 
} else { // else문은 false값을 가질 시에 블록문이 실행된다.
  result = '짝수'; 
}

console.log(result); // 최종적으로 "짝수"가 출력된다.
}


// 이를 삼항 조건 연산자로 바꿔쓰면 다음과 같다.

{
var x = 2;
var result;

var result = x % 2 ? '홀수' : '짝수';
// 조건문에서 2 % 2은 0이므로 false값인 '짝수'가 출력된다.
console.log(result); // '짝수'
}


// 또한 경우의 수가 세가지("음수", "양수", "0")라면 다음과 같이 ()를 사용하여 쓸 수 있다.

{
var num = 2;

var kind = num ? (num > 0 ? '양수' : '음수') : "0"; // ()안에서부터 우선 연산하다.

console.log(kind); // "양수"
}


// 8.2.2 switch문

// switch문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다.

{
// switch를 이용한 한글로의 번역
var type = "string";

var typeName;

switch (type) {
  case "number": typeName = "숫자";
    break;
  case "string": typeName = "문자"; // switch문의 type과 case문의 선언된 이름값이 일치하므로 typeName에 "문자" 데이터가 할당된다.
    break; // 이때 블록문이 출력된 경우 break문을 통해 switch문 밖으로 빠져나와야 한다.
  case "boolean": typeName = "불리언";
    break;
  default: null; // 일반적으로 default 뒤에는 break문을 작성하지 않아도 된다.
}

console.log(typeName);
}


// switch문은 조건문에 불리언값을 사용하지 않고 단순히 비교를 통해 일치(===)를 확인한다.


{
// switch문을 활용한 윤년 판별
var years = 2000;
var month = 2;
var days;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    days = (((years % 4 === 0) && (years % 100 !== 0)) || (years % 400 === 0)) ? 29 : 28;
    break;
  default: console.log("Invalid month");
}

console.log(days); // 29
}
// 연도가 4년으로 나눠떨어지면 윤년, 연도가 100으로 나눠떨어지면 평년, 연도가 400으로 나눠떨어지면 윤년이다.
// 해석해보면 years가 2000이므로 (2000 % 4 === 0) && (2000 % 100 !== 0)은 true && false이며 이는 false를 출력하게 된다.
// false || (years % 400 ===0) 이므로 false || true 이며 최종적으로 true가 출력되어 29가 days에 할당된다.
// 즉, days는 29이며 따라서 2000년은 윤년이다.


// 8.3 반복문

// 8.3.1 for문

// for문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복실행한다.

{
for (var i = 0; i < 6; i++) {
  console.log(i); // 0 1 2 3 4 5
}
}
// 가장 먼저 선언된 변수 i에서 시작한다.
// i는 조건문을 거쳐 불리언 값을 출력한다. 불리언값이 true라면 블록문을 실행하게 되며 false이라면 반복문은 그대로 종료된다.
// 블록문을 실행한 후 i는 증감식을 거친다. 위의 식에서는 증감식이 ++i 이므로 i는 1의 값을 재할당 받게된다.
// 재할당 받은 i는 다시 조건문으로 가게되며 이를 반복수행한다.
// 이를통해 i가 6이 될때까지 반복하며 6이 될 시 6 < 6의 조건문이 적용되므로 false값을 출력하여 반복문이 종료된다.

// for문 내에 for문을 중첩하여 사용가능하다. 다음은 두개의 주사위를 던졌을 때 합이 6이되는 경우의 수를 모두 출력하는 반복문이다.

{
for (var i = 1; i <= 6; i++) {
  for (var y = 1; y <= 6; y++) {
    if (i + y === 6) {
       console.log(`[${i}, ${y}]`); 
    }
  }
}
}
// for 문 내에서 i = 1에서 시작한다. 조건문으로 이동하여 1 <= 6은 true이므로 블록문을 출력한다.
// 블록문은 다시 for문이며 이번엔 y = 1에서 시작한다. 조건문으로 이동하여 1 <= 6은 true이므로 블록문을 출력한다.
// 이번 블록문은 if 문이며 조건문으로 이동하면 i === 1이고 y === 1이기 때문에 false가 나오며 블록문은 출력되지 않는다. 이러한 과정을 i++ 증감식을 거쳐 반복한다.
// 이렇게 반복문안에 반복문, 조건문 등이 복잡하게 얽혀 가독성이 떨어지는 문을 해석할 경우 차분하게 위에서부터 아래로 내려오는 형식으로 풀면 된다.


// 8.3.2 while문

// while문 역시 주어직 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다.
// while문은 보통 반복횟수가 불명확할때 사용하며 for문은 반복횟수가 명확할때 주로 사용한다.

{
var count = 0;

while (count < 3) { // count가 3이 되면 while문은 종료된다.
  console.log(count);
  count++;
}
}


// 무한루프에서 탈출하기 위해서는 코드 블록 내에 if문을 통하여 탈출 조건을 만들고 break문으로 코드 블록을 탈출한다.

{
var count = 0;

while (true) {
  console.log(count); // 0 1 2 
  count++;
  if (count === 3) break; // count가 3일때 break문이 작동한다. 작동시 코드 블록에서 탈출한다.
}
}


// 8.3.3 do ... while 반복문

{
var count = 0;

do {
  console.log(count);
  count++;
} while (count < 0); // 원래대로라면 조건문이 0 < 0이 되어 false값이 되면서 아무것도 출력되지 않지만 do ... while문의 경우 바로 false값이 나오더라도 한번은 실행한다.
}


// 8.4 break문

// 앞서 봤듯이 break문은 코드 블록을 탈출한다. 정확히는 레이블문, 반복문, 조건문, switch문의 코드블럭을 탈출한다. 위의 조건 외에 사용하면 오류가 발생한다.
// 레이블문(label statement)이란 식별자가 붙은 문을 말한다.

{
foo: {
  console.log(1);
  break foo; // 여기서 break를 통해 레이블문을 빠져나오게 된다.
  console.log(2);
} // 1

outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) {break outer;}
    else {console.log(`[${i}, ${j}]`)}
  }
}
}
// i + j의 값이 3이 되면 if문을 통해 반복문을 빠져 나오게 된다. 
// 따라서 i < 3, j < 3을 만족하면서 두 값의 합이 3이 되는 값을 제외한 나머지 데이터를 배열로 나타낸 레이블문이다.
// 레이블 문은 중첩된 for문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.


// 8.5 continue문

// continue문은 반복문의 코드 블록 식행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다.
// break문처럼 반복문을 탈출하지는 않는다.

// 아래는 변수 search 안에 있는 문자열의 수를 count에 할당하는 문이다.

{
var string = 'Nice to meet you'
var search = ' ';
var count = 0;

for (var i = 0; i < string.length; i++) { // 1) 먼저 초기변수 i = 0이 할당된다. 2) 0 < 16은 true이므로 블록문을 실행한다. 5) 이러한 반복과정을 조건에 따라 반복한다.
  if (string[i] !== search) continue; // 3) string[0]은 N이므로 N !== ' '은 true이다. 따라서 continue문이 실행된다.
  count++; // 4) continue문의 실행을 통해 count++는 생략되었다. 6) 만약 if의 조건문에서 false가 나왔다면 count++가 실행된다.
}

console.log(count); // 3
}



// 위 예제의 for문은 다음 코드와 동일하게 동작한다.

{
var string = 'Nice to meet you'
var search = ' ';
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++
  } 
}

console.log(count); // 3
}
// 위의 문처럼 if문 내에서 실행해야 할 코드가 한 줄이라면 continue 문을 사용했을 때보다 간편하고 가독성도 좋다.
// 하지만 if문 내에서 실행해야 할 코드가 길다면 들여쓰기가 한 단계 더 깊어지므로 continue문을 사용하는 편이 가독성이 더 좋다.

