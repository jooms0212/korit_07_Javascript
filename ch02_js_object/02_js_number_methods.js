let x = 10.656;
// toFixed(0)
console.log(x.toFixed(0)); // 결과값 : 11
console.log(x.toFixed(2)); // 결과값 : 10.66
console.log(x.toFixed(5)); // 결과값 : 10.65600

// toPrecision()
console.log(x.toPrecision());      // 결과값 : 10.656
console.log(x.toPrecision(2));    // 결과값 : 11
console.log(x.toPrecision(4));    // 결과값 : 10.66

// parseInt()
console.log(parseInt('-10'));  // 결과값 : -10
console.log(parseInt('-12.33'));  // 결과값 : -12
console.log(parseInt('10'));  // 결과값 : 10
console.log(parseInt('12.33'));  // 결과값 : 12
console.log(parseInt('10 20 30'));  // 결과값 : 10    
// 10을 출력하고 공백을 만난순간 종료
console.log(parseInt('10 years'));  // 결과값 : 10
// 10을 출력하고 공백을 만난순간 종료
console.log(parseInt('years 10'));  // 결과값 : NaN
// y가 숫자가 아니라고 판단해 not a num 을 출력