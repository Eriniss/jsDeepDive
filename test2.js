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