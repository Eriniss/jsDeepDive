let firstName, lastName;
firstName = "Jeong"; // 프로퍼티로 저장
lastName = (word1, word2) => word1 + word2; // 메서드로 저장

const x = { firstName, lastName } // 프로퍼티와 메서드

const obj = new Object()

console.log(obj)

Object.getPrototypeOf(obj); // obj의 프로토타입을 취득, 복사?

Object.setPrototypeOf(obj, x); // obj의 프로토타입을 교체

console.log(obj.firstName);
console.log(x.lastName("Hee", "Seop"));