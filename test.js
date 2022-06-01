var x = 1; // 전역 변수, 즉 최상단 스코프다.

function foo() { // foo의 하위 스코프는 bar이다.
  var x = 10;
  bar();
}

function bar() { // bar의 상위 스코프는 foo이다.
  console.log(x);
}

foo(); // 
bar(); // 