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
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) console.log(i);
}

repeat(5, logOdds); // 1 3

// 함수를 합치는 방법은 인수에 또다른 함수를 전달하는 방식이다.
// 이처럼 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수(callback function)라고 하며, 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수(Higher-Order Function, HOF)라고 한다.
// 콜백 함수는 함수가 고정되어있는 중첩 함수와 달리 인수로 함수를 전달받아 작동하기 때문에 인수를 변경하여 함수를 변경할 수 있다.
// 즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.

