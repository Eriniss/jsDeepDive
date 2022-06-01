// 원시 값과 객체의 비교

// 11.1 원시 값

// 원시 타입의 값, 즉 원시 값은 변경 불가능한 값(immutable value)이다. 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.
// 원시값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값이 저장된다.
// 원시값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달(pass by value)라 한다. 이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이를 참조에 의한 전달(pass by reference)라 한다.


// 11.1.2 문자열과 불변성

var str = 'string'; // 문자열은 원시값이다.

str[0] = 'S'; // 따라서 이와같은 문으로 문자열을 변경할 수 없다. 이때 에러가 발생하지 않는다.

console.log(str); // string


// 11.1.3 값에 의한 전달

var score = 80;
var copy = score;
// copy 변수는 score 원시값으로 부터 값에 의한 전달을 받았다. 즉, 원시값을 복사하였다.
console.log(score); // 80
console.log(copy); // 80

score = 100;
// 만약 score 원시값을 재할당 하였을때 copy는 원시값으로 부터 참조되지 않는다.
console.log(score); // 100
console.log(copy); // 80

// 쉽게 설명하자면 score와 copy의 숫자 값 80을 갖는다는 점은 동일하지만, score 변수와 copy 변수의 값 80은 서로 다른 메모리 공간에 저장된 별개의 값이다.
// 변수에는 값이 전달되는 것이 아니라 메모리 주소가 전달되기 때문이다. 이는 변수와 같은 식별자는 값이 아니라 메모리 주소를 기억하고 있기 때문이다. 
// 이처럼 "값의 의한 전달"도 사실 값을 전달하는 것이 아니라 메모리 주소를 전달한다. 단, 전달된 메모리 주소를 통해 메모리 공간에 접근하면 값을 잠조할 수 있다.


// 11.2 객체

// 객체는 프로퍼티 개수가 정해져 있지 않으며, 동적으로 추가되고 삭제할 수 있다.


// 11.2.1 변경 가능한 값

// 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.

var person = { 
  name: 'Lee'
}

person.name = "Kim"; // 프로퍼티 값 갱신

person.address = 'seoul'; // 프로퍼티 동적 생성

delete person.address;

// 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다. 즉, 재할당 없이 프로퍼티를 동적으로 추가할 수도 있고 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수도 있다.
// 객체는 단점도 존재하는데 여러개의 식별자가 하나의 객체를 공유할 수 있다는 것이다.
// 따라서 객체의 원본이나 사본 중 어느 한쪽에서 객체의 변경이 일어나면 서로 영향을 주고 받는다.


// 12. 함수


// 12.1 함수란?

// 함수는 자바스크립트에서 가장 중요한 핵심 개념이다. 따라서 정확히 이해하려고 노력하는것이 중요하다.

function add(x, y) { // add 는 선언한 함수 이름이며 (x, y)는 매개변수이다.
  return x + y; // 반환값
}

console.log(add(2, 5)); // 7, (2, 5)는 인수이다.

// 위의 함수를 요리에 비교하자면 add는 요리책, (x, y)는 요리재료, return x + y 는 요리비법이라 할 수 있다.


// 12.2 함수를 사용하는 이유

// 함수는 지정해놨다가 필요할 때 여러 번 호출하여 사용할 수 있다. 즉, 코드를 재사용할 수 있다.


// 12.3 함수 리터럴

// 함수는 객체이다. 하지만 일반객체와 달리 함수는 호출할 수 있다.


// 12.4 함수 정의

// 함수 정의 방식에는 1) 함수 선언문, 2) 함수 표현식, 3) Function 생성자 함수, 4) 화살표 함수 가 있다.


// 1) 함수 선언문

function add (x, y) { // 함수 이름은 생략될 수 없다. 이처럼 반드시 이름을 기입해야 하는 함수를 기명함수 라고 한다.
  return x + y;
}

console.dir(add); // f add(x, y)

console.log(add(2, 5)); // 7

// 함수 선언문은 표현식이 아닌 문이다.
// 또한 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다. 즉, 함수 선언문으로 생성한 함수를 호출한 것은 함수 이름 add가 아니라 자바스크립트 엔진이 암묵적으로 생성한 식별자 add인 것이다.


// 12.4.2 함수 표현식

// 앞서 설명했듯이 자바스크립트의 함수는 객체 타입의 값이다.
// 자바스크립트의 함수는 값처럼 변수에 할당 할 수도 있고 프로퍼티의 값이 될 수도 있으며 배열의 요소가 될 수도 있다.
// 이처럼 값의 성질을 갖는 객체를 일급객체라 하며 자바스크립트의 함수는 일급 객체다.

var add = function foo (x, y) { // 함수 표현식은 꼭 함수 이름을 사용할 필요는 없다. 함수 이름을 사용하지 않는 함수를 익명함수 라고 한다.
  return x + y;
}

console.log(add(2, 5)); // 7

console.log(foo(2, 5)); // Error, 함수 이름으로 호출할 시 에러나 난다. 함수 표현식에서 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.


// 12.4.3 함수 생성 시점과 함수 호이스팅

console.dir(add); // f add(x, y)
console.dir(sub); // undined

console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // Error

function add(x, y) { // 함수 선언문, 함수 선언문은 코드의 선두로 끌어 올려진 것처럼 동작하며 이러한 특징을 함수호이스팅(function hoisting)이라 한다.
  return x + y;
}


var sub = function (x, y) { // 함수 표현식, 함수 표현식은 함수 호이스팅이 적용되지 않는다.
  return x + y;
}


// 12.4.4 Function 생성자함수

// 생성자 함수는 객체를 생성하는 함수를 망한다.

var add = new Function('x', 'y', 'return x + y');

console.log(add(2, 5)); // 7

// 그렇게 권장되지 않는 방식이다.


// 12.4.5 화살표 함수

// ES6에서 도입된 화살표 함수(arrow function)는 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 항상 익명 함수로 정의한다.

const add = (x, y) => x + y;

console.log(add(2, 5)); // 7

// 자세한건 26.3절 "화살표 함수"에서 다루겠다.


// 12.5 함수호출

// 함수는 함수를 카리키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다.


// 12.5.1 매개변수와 인수

// 함수를 실행하기 위해 필요한 값을 함수 외부에서 함수 내부로 전달할 필요가 있는 경우, 매개변수(parameter)를 통해 인수(argument)를 전달한다.
// 이때, 인수는 값으로 평가될 수 있는 표현식이어야 한다.

const add = (x, y) => x + y; // (x, y)가 매개변수

var result = add(1, 2); // (1, 2)가 인수, 이처럼 인수는 값으로 평가될 수 있어야 한다.

// 매개변수는 함수를 정의할 떄 선언하며, 함수 몸체 내부에서 변수와 동일하게 취급된다.
// 즉, 함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 생성되고 일반 변수와 마찬가지로 undefined로 초기화된 이후 인수가 순서대로 할당된다.


function add(x, y) {
  console.log(x, y); // 2, 5
  return x + y;
}

add(2, 5);

console.log(x, y); // Error, 이처럼 매개변수는 함수 몸체 내에서만 작동한다. 자세한건 13장 스코프에서 다루겠다.


function add(x, y) { // 자바스크립트 엔진은 값을 할당하기 전 먼저 평가를 한다.
  return x + y; // x는 2의 값이 정이되었고 y의 값은 정의되지 않았으므로 2 + undefined가 되어 최종적으로 NaN이 출력된다.
}

console.log(add(2)); // NaN


// 12.5.2 인수 확인

function add(x,y) {
  return x + y;
}

// 위 함수를 정의한 개발자의 의도는 아마도 2개의 숫자 타입 인수를 전달받아 그 합계를 반환하려는 것으로 추측된다.
// 하지만, 코드상으로는 어떤 타입의 인수를 전달해야 하는지, 어떤 타입의 값을 반환하는지 명확하지 않다.
// 이러한 경우 자바스크립트의 확장자인 타입스크립트를 활용하는 것도 방법 중 하나이다.
// 자바스크립트 내에서는 논리연산자를 사용하여 확인할 수 있다. 

function add(x, y) {
  if (typeof x !== 'number' || typeof x != 'number') { // OR스위치를 사용하여 둘중 하나라도 숫자열이 아닐 시 true값을 반환하도록 설정해두었다.
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
  }

  return x+ y;
}

console.log(add(2));
console.log('a', 'b');


// 12.5.3 매개변수의 최대 개수

// 매개변수가 많아진다는 것은 함수의 작동이 많아지고 가독성이 떨어지므로 지양한다.
// 따라서 이상적인 함수는 한가지 일만 해야 하며 가급적 작게 만들어야 한다.


// 12.5.4 반환문

// 함수는 return 키워드와 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환(return)할 수 있다.
// return문은 함수 내에서만 사용가능하다.

function multiply(x, y) {
  return x * y; // 반환문
}
// 함수 호출은 반환값으로 평가된다.
var result = multiply(3, 5); 
console.log(result); // 15


// 반환문은 두가지 역할을 수행한다.

// 첫번쨰, 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다. 따라서 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.

function add (x, y) {
  return x + y; // 반환문 
  console.log("이 함수는 두 값을 더해주는 함수입니다.") // 반환문 밑에있는 블록문은 모두 무시된다.
}

console.log(add(3,5)); // 8


// 만약 반환문에 아무 값도 입력하지 않으면 암묵적으로 undefined가 출력된다.

function nothing (x, y) {
  return;
}

console.log(nothing(2, 5)); // undefined


// 12.6 참조에 의한 전달과 외부 상태의 변경

// 11장 "원시 값과 객체의 비교"에서 살펴보았듯이 원시 값은 값에 의한 전달(pass by value), 객체는 참조에 의한 전달(pass by reference)방식으로 동작한다.

// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'kim';
}

// 외부상태
var num = 100;
var person = { name: 'Lee'};

console.log(num); // 100
console.log(person); // {name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 회손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // {name: "kim"}


// 12.7 다양한 함수의 형태

// 12.7.1 즉시 실행 함수

// 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수(IIFE)라고 한다. 즉시 실행 함수는 단 한번만 호출되며 다시 호출할 수 없다.

// 익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b; // 15
}())

// 기명 즉시 실행 함수
(function () {
  var a = 25;
  var b = 50;
  return a + b; // 75
})

foo() // Error, foo is not defined

// 즉시실행 함수는 ()로 감싸주지 않으면 에러가 난다.



// 12.7.2 재귀 함수

// 함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다.
// 재귀 함수(recursive function)는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
// 재귀함수는 반복되는 처리를 위해 사용한다.

function countdown(n) {
  for (var i = n; i >= 0; i--) {
    console.log(i);
  }
}

countdown(10);


// 이처럼 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다.

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n -1) * n
function factorial(n) {
  // 탈출 조건: n이 1 이하일때 재귀 호출을 멈춘다.
  if (n <= 1) return 1; 

  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(8)); // 40320

// factorial 함수 내부에서 자기 자신을 호출할 때 사용한 식별자 factorial은 함수 이름이다. 함수 이름은 함수 몸체 내부에서만 유효하다.
// 따라서 함수 내부에서는 함수 이름을 사용해 자기 자신을 호출할 수 있다.
// 또한 재귀함수는 자신을 무한 재귀 호출한다. 따라서 재귀 함수 내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.


// 12.7.3 중첩 함수

// 함수 내부에 정의된 함수를 정첩 함수(nested function) 또는 내부 함수(inner function)라 한다.
// 그리고 중첩 함수를 포함하는 함수는 외부 함수(outer function)라 부른다.

function outer() {
  var x = 1;

  // 중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }

  inner();
}

outer();


// 12.7.4 콜백 함수

// 어떤 일을 반복 수행하는 repeat 함수를 정의해 보자.

function repeat(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

repeat(5); // 0 1 2 3 4

// repeat 함수는 매개변수를 통해 전달받은 숫자만큼 반복하며 console.log(i)를 호출한다.
// 이때 repeat 함수는 console.log(i)에 강하게 의존하고 있어 다른 일을 수행할 수 없다.
// 따라서 만약 repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.

function repeat1(n) {
  // i를 출력한다.
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

repeat1(5); // 0 1 2 3 4

function repeat2(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

repeat2(5); // 1 3

// 아래의 함수는 삼항 조건 연산자로 나타낸 것이다.

function repeat2(n) {
  for (var i = 0; i < n; i++) {
    guessEvenOrOdd = (i % 2) ? console.log(i) : null; // 조건문에서 i % 2가 만약 1이라면 truthy 값이므로 console.log(i)가 출력된다.
  }
}

repeat2(5); // 1 3

// 위 예제의 함수들은 반복하는 일은 변하지 않고 공통적으로 수행하지만 반복하면서 하는 일의 내용은 다르다.
// 즉, 함수의 일부분만이 다르기 때문에 매번 함수를 새롭게 정의해야 한다. 이 문제는 함수를 합성하는 것으로 해결할 수 있다.

// 외부에서 전달받은 f를 n만큼 반복 호출한다.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
}

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4, 콜백 함수에서 인수안에 들어가는 함수는 인수를 넣지 않는다.

var logOdds = function (i) {
  if (i % 2) console.log(i);
}

repeat(5, logOdds); // 1 3, 콜백 함수에서 인수안에 들어가는 함수는 인수를 넣지 않는다.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.

// 함수를 합치는 방법은 인수에 또다른 함수를 전달하는 방식이다.
// 이처럼 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수(callback function)라고 하며, 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수(Higher-Order Function, HOF)라고 한다.
// 콜백 함수는 함수가 고정되어있는 중첩 함수와 달리 인수로 함수를 전달받아 작동하기 때문에 인수를 변경하여 함수를 변경할 수 있다.
// 즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
// 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
// 다시말해, 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.


repeat(5, function (i) { // repeat함수는 위에 있다.
  if (i % 2) {
    console.log(i);
  }
}) // 1 3 


// 콜백 함수는 함수형 프로그래밍 패러다임 뿐만 아니라 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등)에 다방면에 활용되는 중요한 패턴이다.

// 콜백 함수를 사용한 이벤트 처리

document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked');
});

//콜백 함수를 사용한 비동기 처리
// 1초 후에 메시지를 출력한다.

setTimeout(function () {
  console.log('1초 경과');
}, 1000);

// 정리하자면 콜백 함수는 인수에 또다른 함수를 할당한 것으로 고차함수를 나타낸것이다.


// 12.7.5 순수 함수와 비순수 함수

// 함수형 프로그래밍에서는 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수를 순수 함수(pure function)이라 한다.
// 반대로, 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수(impure function)라고 한다.

var count = 0; // 현재 카운트를 나타내는 상태

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.

function increase(n) {
  return n++;
}

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경

count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2


// 비순수 함수는 순수 함수와 달리 외부에 영향을 주는 부수 효과가 나타나난다.


var count = 0; // 현재 카운트를 나타내는 상태

// 비순수 함수

function increase() {
  return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.

increase();
console.log(count); // 1

increase();
console.log(count); //2
