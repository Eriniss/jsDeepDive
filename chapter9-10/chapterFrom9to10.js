// * 타입 변환

// 자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다.
// 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(explicit coercion) 또는 타입 캐스팅(type casting)이라 한다.

var x = 10;

var str = x.toString();
console.log(typeof str, str); // string "10"

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

0 + '' // "0"
NaN + '' // 'NaN'

true + '' // 'true'
false + '' // 'false'

null + '' // 'null'

undefined + '' // 'undefined'

(symbol()) + '' // Error

({}) + '' // "[object Object]""
Math + '' // "[object Math]"
`[] + ''` // "", ``는 오류내기 싫어서 사용
[10, 20] + '' // "10,20"
`(function({})) + ''` // "function(){}"
Array + '' // "function Array(} { [native code] }"


// 9.2.2 숫자 타입으로 반환

// + 를 제외한 -, *, / 값은 피연산자가 모두 숫자여야 한다. 이때 타입 캐스팅이 일어난다.

1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN


// 부등호 역시 마찬가지로 모두 숫자여야 하므로 타입 캐스팅이 발생한다.

'1' > 0 // true


// 앞서 +x 형태의 단항 연산자는 숫자 x를 문자열로 타입 캐스팅 한다고 배웠다

+'' // 0
+'1' // 1
+'string' // NaN

+null // 0

+undefined // NaN

+symbol // Error


+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN

// symbol 타입은 형변환으로 바뀌지 않는다. 또한 null 값과 undefined의 값이 서로 다르며 객체를 숫자로 형변환 했을때 대부분 NaN가 뜨는것을 알 수 있다.


// 9.2.3 불리언 타입으로 변환

// 불리언 타입으로 형변환을 할때 truthy 값과 falsy 값을 이해할 필요가 있다.
// falsy 값은 false, undefined, null, 0, -0, NaN, ''(빈문자열)이 있으며 이외의 값은 모두 truthy이다.


// 9.3 명시적 타입 변환

// 위의 방법 외에도 여러 변환 방법이 존재한다.


// 9.3.1 문자열 타입으로 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법

String(1); // "1"
String(NaN); // "NaN"
String(true); // "true"

// 2. Object.prototype.toString 메서드를 사용하는 방법

(1).toString(); // "1"
(Infinity).toString() // "Infinity"

// 3. 문자열 연결 연산자를 이용하는 방법

1 + '' // "1"
false + '' // "false"


// 9.3.2 숫자 타입으로 변환

// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법

Number('0'); // 0
Number('Hello') // NaN
Number(ture) // 1

// 2. perseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)

parseInt('0'); // 0
parseInt('-1'); // -1
parseFloat(3.14); // 3.14

// 3. + 단한 산술 연산자를 이용하는 방법

+'0' // 0
+false // 0
+'3.14' // 3.14

// 4. * 산술 연산자를 이용하는 방법

'0' * 1 // 0
true * 1 // 1
'3.14' * 1 // 3.14


// 9.3.3 불리언 타입으로 변환

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법

Boolean('x');  // true
Boolean(''); // false
Boolean(NaN); // false
Boolean({}); // true
Boolean([]); // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법

!!'x'; // true
!!null  // false
!!0 // false
!!1 // true


// 9.4 단축 평가

// 9.3.1 논리 연산자를 사용한 단축 평가

// 논리 연산자는 &&, ||을 주로 사용한다.

// && 연산자는 앞이 true일 때 뒤까지 확인해야 결과값을 알 수 있는 성질이 있다.
// || 연산자는 반대로 true일 때 뒤까지 확인할 필요가 없다.
// 아래의 연산자를 통해 알아보자

'Apple' && 'Banana' // 'Banana', 'Apple'과 'Banana' 모두 truthy값이다. 앞의 피연산자가 true로 작동하므로 'Banana'가 출력된다
'Apple' || 'Banana' // 'Apple', 'Apple'이 turthy 값이므로 뒤의 'Banana'값은 무시된다.

// 다음은 논리 연산자로 나타낸 식이다.

var done = true;
var message = "";

if (done) {
  message = "완료"
} else {message = "미완료"
}

console.log(message); // "완료"


// 삼항 연산자로 나타내면 다음과 같다.

var done = false;
var message = "";

message = done ? "완료" : "미완료";

console.log(message); // "미완료"


// 객체는 키(key)와 값(value)으로 구성된 프로퍼티(property)의 집합이다. 
// 만약 객체를 가리키기를 기대하는 변수의 값이 객체가 아니라 null 또는 undefined인 경우 객체의 프로퍼티를 참조하면 타입 에러(typeError)가 발생한다.

var elem = null;
var value = elem.value;


// 이때 단축 평가를 사용하면 에러를 발생시키지 않는다.

var elem = null;
var value = elem && elem.value; // null, elem이 falsy 값이므로 뒤의 elem.value가 출력된다.


// 9.4.2 옵셔널 체이닐 연산자

// ES11에서 도입된 옵셔널 체이닝(optional chaining) 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

var elem = null;

var value = elem?.value;
console.log(value); // undefined


// ''도 우항의 length 프로퍼티가 참조된다. null 혹은 undefined가 아니기 때문이다.

let a = "Hello";

let value = a?.length;
console.log(value); // 5, Hellow의 length는 5이다.


// 9.4.3 null 병합 연산자

// 마찬가지로 ES11에서 도입된 null 병합(nullish coalescing)연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
// null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.

var foo = null ?? 'defalt string';
console.log(foo); // "default string"


// ||를 사용하면 비슷하게 나타낼 수 있다. 하지만, 논리 연산자는 falsy값을 나타내는 값이 null 말고도 많으므로 아래처럼 원하지 않은 값을 할당시킬 수 있다.

var foo = '' || 'default string';
console.log(foo); // 'default string', 원하는 값은 ''이지만 'default string'이 할당되어 버렸다.


// 하지만 ??를 사용하면 원하는 값인 ''을 할당할 수 있다.

var foo = '' ?? 'default string';
console.log(foo); // ""


// * 10. 객체 리터럴

// 10.1 객체란?

// 자바스크립트는 객체(object)기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 "모든 것"이 객체다
// 원시 값을 제외한 나머지 값은 모두 객체이다.
// 원시 값은 변경할 수 없지만 객체 값은 변경이 가능한 값이다.

var person = {
  name: 'Lee', // name은 프로퍼티 키이고 'Lee'는 프로퍼티 값 이다.
  age: 20 // 마찬가지로 ag는 프로퍼티 키, 20은 프로퍼티 값이다.
}


// 프로퍼티 값이 함수일 경우 메서드(method)라 부른다.
// 메서드는 프로퍼티를 참조하고 조작할 수 있는 동작이다.

var counter = {
  num: 0, // 프로퍼티
  increase : function () { // 메서드
    this.num++
  }
}


// 객체 리터럴은 중괄호({...}) 내에  0개 이상의 프로퍼티를 정의한다. 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.

var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

console.log(typeof person); // object
console.log(person); // {name: 'Lee', sayHello: f}


// 10.3 프로퍼티

// 프로퍼티 키를 설정할 때 몇가지 규칙을 따르는 것이 좋다.
// 프로퍼티 키 네이밍은 따옴표 사용('', ""), 예약어(var, function), 중복선언 등은 지양해야 하며 my-name 과 같이 -는 사용시 에러가 난다.


// 10.4 메서드

var circle = {
  radius: 5, // 프로퍼티
  getDiameter: function () { 
    return 2 * this.radius; // this는 circle을 가르킨다. 즉, circle의 radius프로퍼티에 접근하여 5로 작동한다.
  }
}


// 자세한건 12장에서 다루겠다.


// 10.5 프로퍼티 접근

// 프로퍼티를 접근하는 방법은 크게 2가지이다.

var person = {
  name1: 'Lee',
  name2: 'Kim'
}

console.log(person.name1); // 접근 연산자 표기법(dot notation)
console.log(person['name2']); // 대괄호 표기법(bracket notation), 대괄호속에 따옴표('')를 사용하지 않으면 식별자로 인식되므로 주의하자


// 10.6 프로퍼티 값 갱신

// 프로퍼티를 갱신(재할당) 하는것 또한 가능하다.

var person = {
  name1: 'Lee',
  name2: 'Kim'
}

person.name1 = 'Jeong';

console.log(person.name1); // "jeong"


// 10.7, 10.8 프로퍼티 동적 생성 및 삭제

// 존재하지 않는 프로퍼티에 값을 할당하면 새로 생성된다.
// 또한 delete 연산자를 통해 존재하는 프로퍼티를 삭제할 수 있다.

var person = {
  name: 'Lee'
}

person.age = 20; // 프로퍼티 추가

console.log(person); // {name: 'Lee', age: 20}

delete person.age; // 프로퍼티 삭제

delete person.address // 존재하지 않는 프로퍼티를 삭제해도 에러가 나지 않는다.

console.log(person); // {name: 'Lee'}


// ES6에서 추가된 객체 리터럴의 확장 기능

// 10.9.1 프로퍼티 축약 표현

// ES6에서는 ES5보다 더욱 간편하게 객체의 프로퍼티를 설정할 수 있다.

let x = 1, y = 2;

const obj1 = {x, y};

console.log(obj1); // {x: 1, y: 2}


// 10.9.2 계산된 프로퍼티 이름

// 템플릿 리터럴 (``)을 활용하여 프로퍼티 키를 동적 생성할 수 있다.

const prefix = 'prop';
let i = 0;

const obj2 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
}

console.log(obj2) // {prop-1: 1, prop-2: 2, prop-3: 3}


// 10.9.3 메서드 축약 표현

// ES6에서는 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.

const obj3 = {
  name: 'Lee', 
  sayHi() {
    console.log(`Hi! ${this.name}`);
  }
}

obj3.sayHi() // "Hi! Lee"