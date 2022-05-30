// * 연산자


// 7.1 산술 연산자

// 7.1.1 이항 산술 연산자

"+" // 덧셈
"-" // 뺄셈
"*" // 곱셈
"/" // 나눗셈
"%" // 나머지

// 7.1.2 단항 산술 연산자

"++" // 증가
"--" // 감소

var x = 1;

x++; // 2, x = x + 1과 동일하다.
x--; // 1, x = x - 1과 동일하다.

// 단항 산술 연산자는 위치에 따라 의미가 있다.
// 피연산자 앞에 위치할 경우 피연산자의 값을 먼저 증가/감소시킨 후, 다른 연산을 수행한다.
// 피연산자 뒤에 위치할 경우 다른 연산을수행한 후, 피연산자의 값을 증가/감소 시킨다.

var x = 5, result;

result = x++; // 선할당 후증가
console.log(result, x); // 5 6

result = ++x; // 선증가 후할당
console.log(result, x);

// 단항 연산자에 +를 할당할 경우 값을 숫자 타입으로 변환하여 반환한다.

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

// 마찬가지로 단항 연산자에 -를 할당할 경우 문자열에서 숫자열로 변환하지만 부호를 반전하여 출력한다.

var x = "10";

console.log(-x); // -10
console.log(x) // "10"


// 7.1.3 문자열 연결 연산자

// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.

'1' + 2; // '12'
1 + '2'; // '12'

1 + true; // 2
1 + false; // 1

1 + null; // 1
1 + undefined // NaN

// 7.2 할당 연산자

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

var str = "My name is "

str += "Hong"; // str = str + "Hong"
console.log(str); // "My name is Hong"

// 7.3 비교 연산자

// 7.3.1 동등/일치 비교 연산자

"==" // 동등 비교
"===" // 일치 비교
"!=" // 부동등 비교
"!==" // 불일치 비교

5 == '5' // true, 자동으로 형변환을 하여 타입을 일치시킨다.
5 === '5' // false, 일치의 경우 서로의 타입이 맞지 않으면 false가 출력된다.

// 동등 비교의 경우 결과를 예측하기 어려워 주로 일치 비교를 사용한다.

NaN === NaN // false, NaN은 자신가 일치하지 않는 유일한 값이다.

// 7.3.2 대소 관계 비교 연산자

"x>1" // x는 1보다 크다.
"x<1" // x는 1보다 작다.
"x>=1" // x는 1보다 같거나 크다.
"x<=1" // x는 1보다 같거나 작다.

// 7.4 삼항 조건 연산자

// 삼항 조건식의 구성은 다음과 같다.

var result = score >= 60 ? 'pass' : 'fail';

// 변수이름 할당, 조건식, 반환할 값들로 구성되어있다.
// 먼저 조건식에서 true가 반환될 경우 첫 번째 피연산자인 'pass'가 반환된다.
// 만약 조건식에서 false가 반환될 경우 두 번째 피연산자인 'fail'이 반환된다.

var x = 2;

var result = x % 2 ? '홀수' : '짝수'; 
// 조건식에서 2 % 2 는 0이므로 false가 반환되며 이는 두 번째 피연산자인 '짝수'를 반환한다.
console.log(x); // 짝수

// 이를 if else 문으로 구성하면 다음과 같다.

var x = 2, result;

if (x % 2) result = '홀수';
else result = '짝수';

console.log(result); // 짝수

// 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if...else 문은 표현식이 아니므로 값처럼 사용할 수 없다.
// 이러한 이유로 삼항 조건 연산자 표현식은 매우 유용하게 쓰인다.

var x = 10;

var result = x % 2 ? '짝수' : '홀수';
console.log(result); // 짝수

// 7.5 논리 연산자

"||" // OR 스위치
"&&" // AND 스위치
"!" // 부정

// OR 스위치는 우황과 좌황 중 하나라도 true라면 결과값이 true로 반환된다.
false || true; // true
false || false; // false

// AND 스위치는 우황과 좌황 모두 true여야만 결과값이 true로 반환된다.
true && false; // false
true && true; // true

// 논리 부정은 불리언 결과값을 반대로 뒤집는다. 만약 피연산자가 불리언 값이 아니라면 불리언 타입으로 암묵적 타입 변환된다.
!true; // false
!false; // true
!0; // true
!"Hello"; // false

// 7.6 쉼표 연산자

// 쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환한다.

var x, y, z;

x = 1, y = 2, z = 3; // 3

// 7.7 그룸 연산자

// 그룸연산자()를 사용하여 연산의 우선순위를 설정할 수 있다.

// 7.8 typeof 연산자

// typeof 연산자는 피연산자의 데이터타입을 문자열로 반환한다.

typeof ""; // string
typeof NaN; // number
typeof undefined; // undefined
typeof null; // object
typeof function () {}; // function

// 7.9 지수 연산자

// ES6에서 새로 등장한 지수연산자는 다음과 같다.

2 ** 2; // 4, 2의 2제곱이다.
2 ** 2.5; // 5.657..., 2의 2.5제곱이다.

// 이를 Math.pow로 나타내면 다음과 같다.

Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.657...

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 ()로 묶어서 사용해야 한다.

(-5) ** 2; // 25

// 7.12 연산자 우선순위

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

