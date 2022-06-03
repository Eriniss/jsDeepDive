// 19. 프로토타입

// 19.1 객체지향 프로그래밍

// 자바스크립트를 이루고 있는 거의 "모든것"은 객체이다.
// 객체지향 프로그래밍은 실세계의 실체(사물이나 개념)를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
// 실체는 특징이나 성질을 나타내는 속성(attribute/property)을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.
// 이렇게 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화(abstraction)라 한다.

{
  // 이름과 주소 속성을 갖는 객체
  const person = {
    name: 'Lee',
    address: 'Seoul'
  }

  console.log(person); // {name: "Lee", address: "Seoul"}
}
// 이처럼 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 한다.


// 예를 들어 원의 반지름과 이를 이용한 지름, 둘레, 넓이를 구할 수 있다.
// 이때 반지금은 원의 상태를 나타내는 데이터이며 원의 지금, 둘레, 넓이를 구하는 것은 동작이다.

{
  const circle = {
    radius: 5, // 반지름

    // 원의 넓이: 3.14 * r ** 2
    getArea(radius) {
      return Math.PI * radius ** 2;
    }
  }

  console.log(circle.radius); // 5
  console.log(circle.getArea()) // 78.53981633974483
}
// radius와 같이 상태(state)를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작(behavior)을 하나의 논리적인 단위로 묶어 생각한다.
// 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.
// 상태 데이터를 프로퍼티(property), 동작 데이터를 메서드(Method)라 한다.


// 19.2 상속과 프로토타입

// 상속(ingeritance)은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.

{
  // 생성자 함수
  function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
      return Math.PI * this.radius ** 2;
    }
  }

  // 각각의 인스턴스 생성
  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  console.log(circle1.getArea === circle2.getArea); // false

  // Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
  // getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
  // getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.
  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172
}


// 상속을 통해 불필요한 중복을 제거해 보자. 자바스크립트는 프로토타입(prototype)을 기반으로 상속을 구현한다.

{
  // 생성자 함수
  function Circle(radius) {
    this.radius = radius;
  }
  
  // Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
  // 공유해서 사용할 수 있도록 프로토타입에 추가한다.
  // 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다.

  Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
  }

  // 인스턴스 생성
  const circle1 = new Circle(1);
  const circle2 = new Circle(2);

  console.log(circle1.getArea === circle2.getArea); // true

  console.log(circle1.getArea()); // 3.141592653589793
  console.log(circle2.getArea()); // 12.566370614359172
}


// 19.3 프로토타입 객체

// 프로토타입 객체(또는 줄여서 프로토타입)란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속(inheritance)을 구현하기 위해 사용된다.
// 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지며, 이 내부슬롯의 값은 프로토타입의 참조(null인 경우도 존재)다.
// [[Prototype]]에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다.
// 즉, 객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.


// 19.3.1 __proto__ 접근자 프로퍼티

// 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 포로토타입, 즉 [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다.

{
  const person = { name: 'Lee' }

  // 크롬 브라우저의 콘솔에서 출력하면 다음과 같다

  person
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
}


// __proto__는 접근자 프로퍼티다.

// 따라서 getter 함수인 [[Get]]이나 setter 함수인 [[Set]]이 호출된다.

{
  const obj = {};
  const paren = { x: 1}

  // getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
  obj.__proto__;

  // setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
  obj.__proto__ = parent; // obj 객체가 paren 객체로 변경되었다.
  console.log(obj.x); // 1
}


// __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.

// __proto__ 점근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.

{
  const person = { name: 'Lee'}

  // person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
  console.log(person.hasOwnProperty('__proto__')); // false

  // __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
  console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
  // {get: f, set: f, enumerable: false, configurable: true}
  
  // 모든 객체는 Objcet.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
  console.log({}.__proto__ === Object.prototype); // true
}


// __proto__ 접근자 프로프티를 통해 프로토타입에 접근하는 이유
// [[Prototype]] 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.

{
  const parent = {}
  const child = {}

  // child의 프로토타입을 parent로 설정
  child.__proto__ = parent;
  // parent의 프로토타입을 parent로 설정
  parent.__proto__ = child; // 타입에러
}
// 서로의 참조가 같아지면 무한루프에 빠지게 된다.
// 이러한 현상을 막기위해 프로퍼티의 검색 방향은 한쪽방향으로 흐른다.


// __proto__ 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.

// gatter 함수인 [[Get]]은 getPrototypeOf 메서드로 바꿔 사용한다.
// setter 함수인 [[Set]]은 setPrototypeOf 메서드로 바꿔 사용한다.

{
const obj = {}
const parent = { x: 1 }

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);
// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent)

console.log(obj.x); // 1
}


// 19.3.2 함수 객체의 prototype 프로퍼티

// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

{
  // 함수 객체는 prototype 프로퍼티를 소유한다.
  (function () {}).hasOwnProperty('prototype') // true

  // 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
  ({}).hasOwnProperty('prototype'); // false
}


// 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 prototype 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.

{
  // non-constructor
  const Person = name => {
    this.name = name;
  }

  console.log(Person.hasOwnProperty('prototype')) // false
  console.log(Person.prototype); // undefined

  // non-constructor
  const obj = {
    foo() {}
  }

  console.log(obj.foo.hasOwnProperty('prototype')) // false
  console.log(obj.foo.prototype); // undefined
}


// 모든 객체가 가지고 있는 __proto__ 접근자 프로퍼티와 함수 객체만이 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
// __proto__는 모든 객체가 가지고 있으며 프로토타입을 참조하는 값을 가진다.
// prototype 프로퍼티는 constructor 객체만 가지고 있으며 프로토타입을 참조하는 값을 가진다


// 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

{
  // obj는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
  const obj = {};

  // 하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
  console.log(obj.constructor === Object); // true
}

// 하지만 리터럴 표기법에 의한 객체 생성 방식과 같이 명시적으로 new 연산자와 함께 생성자 함수를 호출하여 인스턴스를 생성하지 않는 객체 생성 방식도 있다.

{
  // 객체 리터럴
  const obj = {};

  // 함수 리터럴
  const add = function (a, b) { return a + b}
}