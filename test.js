const obj3 = {
  name: 'Lee', 
  sayHi() {
    console.log(`Hi! ${this.name}`);
  }
}

obj3.sayHi() // "Hi! Lee"