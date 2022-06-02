// 16. 프로퍼티 어트리뷰트

// 16.1 내부 슬롯과 내부 메서드

// 내부슬롯(internal solot)과 내부 메스드(internal method)는 자바스크리브 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에 등장하는 이중 대괄호([[...]])로 감싼 이름들이 내부 슬롯과 내부 메서드다.
// 내부슬롯과 내부 메서드는 ECMAScript가 사양에 정의된 대로 구현되어 있어 개발자가 직접 접근 할 수 있도록 공개된 객체의 프로퍼티는 아니다.
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.


{
  const o = {};

  // 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
  `o.[[prototype]]` // ``는 오류나기 싫어서 삽입
  // 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
  o.__proto__ // Object.prototype
}


// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.

{
  const person = {
    name: 'Lee',
    address: 'seoul'
  }

  // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
  console.log(Object.getOwnPropertyDescriptor(person, 'name'));
  // { value: 'Lee', writable: true, enumerable: true, configurable: true }
}
// getOwnPropertyDescriptor 메서드를 호출할 때 첫 번째 매개변수에는 객체의 참조를 전달하고, 두 번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.
// 이떄, Object.getOwnPropertyDescriptor 메서드는 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터(property descriptor) 객체를 반환한다.
// 만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined가 반환된다.

// ES8에서 도입된 getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.


{
  const person = {
    name: 'Lee'
  }

  // 프로퍼티 동적 생성
  person.age = 20;

  // 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
  console.log(Object.getOwnPropertyDescriptors(person));
  // {
  //   name: { value: 'Lee', writable: true, enumerable: true, configurable: true }, 
  //   age: { value: 20, writable: true, enumerable: true, configurable: true }
  // }
  // 이처럼 name 객체와 age 객체 모두를 반환했다.
}


// 16.3 데이터 프로퍼티와 접근자 프로퍼티

// 데이터 프로퍼티란 키와 값으로 구성된 일반적인 프로퍼티다. 지금까지 살펴본 모든 프로퍼티는 데이터 프로퍼티다.
// 접근자 프로퍼티란 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티다.


// 16.3.1 데이터 프로퍼티

{
  [[Value]] 
  // 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
  // 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당 한다. 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다.

  [[Writable]]
  // 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
  // [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다.

  [[Enumerable]]
  // 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 갖는다
  // [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for...in 문이나 Object.keys 메서드 등으로 열거할 수 없다.

  [[Configurable]]
  // 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
  // [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다.
  // 단, [[Configurable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.
}


{
  const person = {
    name: 'Kim'
  }

  console.log(person.getOwnPropertyDescriptor); // { value: 'Kim', writable: true, enumerable: true, configurable: true }
} 


// 16.3.2 접근자 프로퍼티

// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.

{
  [[Get]]
  // 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수다.
  // 즉, 접간자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트[[Get]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.

  [[Set]]
  // 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다.
  // 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.

  [[Enumerabel]]
  // 데이터 프로퍼티의 [[Enumerable]]과 같다.

  [[Configurable]]
  // 데이터 프로퍼티의 [[Configurable]]과 같아.
}


{
  const person = {
    firstName: 'Ungmo',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}}`;
    },
    // setter 함수
    set fullName(name) {
      // 배열 디스트럭처림 할당: "31.1 배열 디스트럭처링 할당" 참고
      [this.firstName, this.lastName] = name.split(' ');
    }
  }
  
  // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
  console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

  // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
  // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
  person.fuuName = 'Heegun Lee';
  console.log(person); // { firstName: "Heegun", lastName: "Lee" }
  
  // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
  // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
  console.log(person.fullName); // Heegun Lee
  
  // firstName은 데이터 프로퍼티다.
  // 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
  // 프로퍼티 어트리뷰트를 갖는다.
  let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
  console.log(descriptor); // {value: "Heegun", writable: true, Enumerable: true, configurable: true}
  
// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// {get: f, set: f, enumerable: true, configurable: true}

}


// 16.4 프로퍼티 정의

// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 어트리뷰트를 재정의하는 것을 말한다.

// Object.defineProperty 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있다.
{
  const person = {}

  // 데이터 프로퍼티 정의
  Object.defineProperty(person, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
  });

  Object.defineProperty(person, 'lastName', {
    value: 'Lee'
  });

  let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
  console.log('firstName', descriptor);
  // firstName {value: "Ungmo", writable: true, enumerable: true, configurable: true}

  //디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
  descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
  console.log('lastName', descriptor);
  //lastName {value: 'Lee', writable: false, enumerable: false, configurable: false}


  // [[Enumerable]]의 값이 flase인 경우
  // 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
  // lastname 프로퍼티는 [[Enumerable]]의 값이 false이므로 열거되지 않는다
  console.log(Object.keys(person)); // ["firstName"]

  //[[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
  // lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없다.
  // 이때 값을 변경하려면 에러는 발생하지 않고 무시된다.
  person.lastName = "Kim";

  // [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
  // lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없다.
  // 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
  delete person.lastName;
  // [[Configurable]]값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.

  descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
  console.log('lastName', descriptor);
  // lastName {value: "Lee", writable: false, enumerable: false, configurable: false}
}
// 마찬가지로 Object.defineProperties 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.


// 16.5 객체 변경 방지

// 객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다. 즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며
// Object.defineproperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.


// 16.5.1 객체 확장 금지

// Object.PreventExtensions 메서드를 사용한다.
// 확장이 금지된 객체는 프로퍼티 추가가 금지된다. 즉, 프로퍼티 동적 추가와 object.defineProperty 메서드 사용이 불가능하다.

{
  const person = { name: 'Lee' };

  console.log(Object.isExtensible(person)); // true, 확장 가능 여부

  // person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
  Object.preventExtensions(person);

  // person 객체는 확장이 금지된 객체다.
  console.log( Object.isExtensible(person)); // false

  // 프로퍼티 추가가 금지된다.
  person.age = 20; // 에러는 나지 않지만 무시된다.
  console.log(person); // {name: "Lee"}

  // 프로퍼티 추가는 금지되지만 삭제는 가능하다.
  delete person.name;
  console.log(person); // {}

  // 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
  Object.defineProperty(person, 'age', { value: 20}); // 타입에러
}

// 16.5.2 객체 밀봉

// Object.seal 메서드를 사용한다.
// 밀봉된 객체는 읽기와 쓰기만 가능하다.

{
  const person = { name: 'Lee'}

  // person 객체는 밀봉(seal)된 객체가 아니다.
  console.log(Object.isSealed(person)); // false

  // person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
  Object.seal(person);

  // person 객체는 밀봉(seal)된 객체다.
  console.log(Object.isSealed(person)); // true

  // 밀봉(seal)된 객체는 confiurable이 false다.
  console.log(Object.getOwnPropertyDescriptors(person));
  // name: {{value: "Lee", writable: true, enumerable: true, configurable: false}, }

  // 프로퍼티 추가가 금지된다.
  person.age = 20; // 무시
  console.log(person); // {name: "Lee"}

  // 프로퍼티 삭제가 금지된다.
  delete person.name; // 무시
  console.log(person); // {name: "Lee"}

  // 프로퍼티 값 갱신은 가능하다.
  person.name = "Kim"
  console.log(person); // {name: "Kim"}
  
  // 프로퍼티 어트리뷰트 재정의가 금지된다.
  Object.defineProperty(person, 'name', { configurable: true}); // 타입에러
}


// 16.5.3 객체 동결

// Object.freeze 메서드를 사용한다.
// 동결된 객체는 읽기만 가능하다.

{
  const person = { name: 'Lee'}

  // person 객체는 동결(freeze)된 객체가 아니다.
  console.log(Object.isFrozen(person)); // false

  // person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
  Object.freeze(person);

  // person 객체는 동결(freeze)된 객체이다.
  console.log(Object.isFrozen(person)); // true

  // 동결(freeze)된 객체는 writable과 configurable이 false다.
  console.log(Object.getOwnPropertyDescriptors(person)); 
  // name: {{value: "Lee", writable: false, enumerable: true, configurable: false}, }
  
  // 프로퍼티 추가가 금지된다.
  person.age = 20; // 무시
  console.log(person); // {name: "Lee"}

  // 프로퍼티 삭제가 금지된다.
  delete person.name; // 무시
  console.log(person); // {name: "Lee"}

  // 프로퍼티 값 갱신이 금지된다.
  person.name = 'Kim'; // 무시
  console.log(person); // {name: "Lee"}

  // 프로퍼티 어트리뷰트 재정의가 금지된다.
  Object.defineProperty(person, 'name', { configurable: true}); // 타입에러
}


// 16.5.4 불변 객체

// Object.freeze 메서드는 중첩 객체까지는 영향을 주지 못한다.

{
  const person = {
    name: 'Lee',
    address : { city: 'Seoul'}
  }
}

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다.
console.log(Object.isFrozen(person)); // true
// 중첩 객체까지 동결하지 못한다.
console.log(Object.isFrozen(person.address)); // false

person.address.city = 'Busan';
console.log(person); // {name: "Lee", address: {city: "Busan"}}, person 객체속에 있는 city 객체의 값이 변경되었다.


// 17. 생성자 함수에 의한 객체 생성

// 17.1 Object 생성자 함수

// 객체를 생성하는 방법은 new 연산자와 합께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
// 빈객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

{
  // 빈 객체 생성
  const person = new Object();

  // 프로퍼티 추가
  person.name = 'Lee';
  person.sayHello = function () {
    console.log(`안녕하세요! 만나서 반갑습니다. ${this.name}라고 합니다.`);
  }
  
  console.log(person); // {name: "Lee", sayHello: f}
  person.sayHello(); // 안녕하세요! 만나서 반갑습니다. Lee라고 합니다.
}


// 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인(built-in) 생성자 함수를 제동한다.

{
  const strObj = new String('Lee');
  console.log(strObj); // String{"Lee"}

  const func = new Function('x', 'return x * x'); 
  console.log(typeof func); // function, 객체 타입중 유일하게 function이라는 독자 규격을 갖는다. 물론 function도 객체중 하나다.
  console.log(func); // {f annonymous(x)}

  const arr = new Array (1, 2, 3);
  console.log(arr); // [1, 2, 3]
}


// 17.2 생성자 함수

// 17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점

// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
// 따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매법 같은 프로퍼티를 기술해야 하기 때문에 비효율 적이다.


// 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점

// 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 갈편하게 생성할 수 있다.

{
  // 생성자 함수
  function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    }
  }

  //인스턴스(instance)의 생성
  const circle1 = new Circle(5); // 반지금이 5인 Circle 객체를 생성
  const circle2 = new Circle(10); // 반지금이 10인 Circle 객체를 생성

  console.log(circle1.getDiameter()); // 10
  console.log(circle2.getDiameter()); // 20
}


// 생성자 함수는 이름 그대로 객체(인스턴스)를 생성하는 함수다.
// 그 형식이 정해져 있는 것이 아니라 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.


// 17.2.3 생성자 함수의 인스턴스 생성 과정

