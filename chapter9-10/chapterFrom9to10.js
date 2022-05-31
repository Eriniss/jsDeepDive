// * 타입 변환

// 자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다.
// 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion) 또는 타입 캐스팅(type casting)이라 한다.

var x = 10;

var str = x.toString();
console.log(typeof str, str); // string 10

console.log(typeof x, x) // number 10


// 자바스크립트는 자바스크립트 엔진에 의해 암묵적으로 타입이 변환되기도 한다. 이를 강제변환(type coercion) 또는 암묵적 타입 변환(implicit coercion)이라 한다.

var x = 10;

var str = x + '';
console.log(typeof str, str); // string 10

console.log(typeof x, x); // number 10


// 9.2 암묵적 타입 변환

// 9.2.1 문자열 타입으로 변환

1 + '2' // "12"

// 여기서 +는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.


// ES6에서 도입된 템플릿 리터럴의 표현식 삽입은 표현식의 평가 결과를 문자열 타입으로 암묵적 타입 변환한다.

`1 + 1 = ${1 + 1}` // "1 + 1 = 2"

