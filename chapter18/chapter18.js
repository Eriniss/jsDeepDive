// 18. 함수와 일급 객체

// 18.1 일급 객체

// 다음과 같은 조건을 만족하는 객체를 일급 객체라고 한다.
// 1) 무명의 리터럴로 생성할 수 있다. ex) 무기명 함수
// 2) 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3) 함수의 매개변수에 전달할 수 있다. ex) 매개변수 안에 함수가 할당되면 콜백 함수가 된다.
// 4) 함수의 반환값으로 사용할 수 있다. ex) 중첩 함수, 콜백 함수
// 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체이다.


// 18.2 함수 객체의 프로퍼티

// 함수는 객체다. 따라서 함수도 프로퍼티를 가질 수 있다.

{
  function square(number) {
    return number * number
  }

  console.dir(square);
  // ƒ square(number)
  // arguments: null
  // caller: null
  // length: 1
  // name: "square"
  // prototype: {constructor: ƒ}
  // [[FunctionLocation]]: test.js:1
  // [[Prototype]]: ƒ ()
  // [[Scopes]]: Scopes[1]
}
// 위의 arguments, caller, length, name, prototype 프로퍼티는 모두 함수 객체의 데이터 프로퍼티이다.
// 이들 프로퍼티는 일반 객체에는 없는 함수 객체 고유의 프로퍼티다.


// 18.2.1 arguments 프로퍼티

// 함수 객체의 arguments 프로퍼티 값은 arguments 객체다. 
// arguments 객체는 함수 호출 시 전달ㄹ된 인수(argument)들의 정보를 담고 있는 순회 가능한(iterable) 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.

{
  function multiply(x, y) {
    console.log(arguments);
    return x * y;
  }

  console.log(multiply()); // NaN, undefined * undefined 
  console.log(multiply(1)); // NaN, 1 * undefined
  console.log(multiply(1, 2)); // 2, 1 * 2
  console.log(multiply(1, 2, 3)); // 2, 1 * 2, 매개 변수로 전달하지 못한 인수는 소멸한다.
}
// 함수를 정의할 때 선언한 매개변수는 함수 몸체 내부에서 변수와 동일하게 취급된다.
// 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 이후 인수가 할당된다.

 
// 유사 배열 객체는 배열이 아니므로 배열 메서드를 사용할 경우 에러가 발생한다.
// 따라서 간접 호출을 해야하며 ES6에서는 Rest 파라미터를 도입했다.

{
  //ES6 Rest parameter
  function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
  }

  console.log(sum(1, 2)); // 3
  console.log(sum(1, 2, 3, 4, 5)); // 15
}
// arguments 객체와 Rest 파라미터에 대해서는 26.4절 "Rest 파라미터"에서 좀 더 자세히 살펴보겠다.


// 18.2.2 caller 프로퍼티

// ECMAScript 사양에 포함되지 않은 비표준 프로퍼티다. 따라서 생략하겠다.


// 18.2.3 length 프로퍼티

// length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

{
  function foo(x, y, z) {} // 3개의 매개변수
  console.log(foo.length); // 3
}


// 18.2.4 name 프로퍼티

// 함수 객체의 name 포르퍼티는 함수 이름을 나타낸다. name 프로퍼티는 ES6 에서 정식 표준이 되었다.
// 따라서 ES5와 ES6는 동작을 달리한다. 익명 함수 표현식의 경우 ES5에서 name 프로퍼티는 빈 문자열을 값으로 가지지만 ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

{
  // 기명 함수 표현식
  var namedFunc = function foo () {};
  console.log(namedFunc.name); // foo

  // 익명 함수 표현식
  var anonymusFunc = function() {};
  // ES6: name 프로퍼티는 빈 문자열을 값으로 갖는다.
  // ES5: name 프로퍼티는 함수 객체를 가르키는 변수 이름을 값으로 갖는다. 이는 식별자 역할을 하기 때문이다.
  console.log(anonymusFunc.name); // anonymus

  function bar() {};
  console.log(bar.name); // bar
}


// 18.2.5 __proto__ 접근자 프로퍼티와 18.2.6 prototype 프로퍼티는 다음장에서 자세히 다뤄보겠다.

