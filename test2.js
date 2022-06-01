var MYAPP = {}; // 전역 네임스페이스 객체

var name = 'Lee', address = 'Seoul';

MYAPP.person = {name, address};

console.log(MYAPP.person.name); // "Lee"