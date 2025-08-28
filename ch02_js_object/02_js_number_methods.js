let x = 10.656;
console.log(x.toFixed(0)); // 결과값 : 11
console.log(x.toFixed(1)); // 결과값 : 10.7
console.log(x.toFixed(5)); // 결과값 : 10.65600

// toPrecision()
console.log(x.toPrecision());   // 결과값 : 10.656
console.log(x.toPrecision(2));  // 결과값 : 11
console.log(x.toPrecision(4));  // 결과값 : 10.66

// parseInt()
console.log(parseInt('-10'))
console.log(parseInt('-12.33'))
console.log(parseInt('10'))
console.log(parseInt('12.33'))
console.log(parseInt('10 20 30'))
console.log(parseInt('10 years'))
console.log(parseInt('years 10'))
