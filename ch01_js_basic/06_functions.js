function sum(x, y) {
  let sum = x + y;
  return sum;
}

sum(10, 20);    // 결과값이 30, 이지만 console에 출력 안되겠네요, 그렇다면
console.log(sum(10,20));

// 함수의 결과값을 변수에 대입하고, 그 변수를 가지고  또 연산을 할 수 있을 겁니다.
let result = sum(10,20);
console.log(result);
let result2 = sum(result, 33);
console.log(result2);