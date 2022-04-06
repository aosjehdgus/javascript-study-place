const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculator = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  times: (a, b) => a * b,
  divide: (a, b) => a / b,
}

/* 공백 기준으로 입력 받기 */
rl.on("line", (line) => {

  input = line.split(' ').map(el => parseInt(el));
  const x = input[0];
  const y = input[1];

  if(!x && !y){
    console.log('올바른 입력 값을 입력해주세요.');
    return;
  } else if(!x){
    console.log('첫 번째 입력 값을 올바르게 입력해주세요.');
    return;
  } else if(!y){
    console.log('두 번째 입력 값을 올바르게 입력해주세요.');
    return;
  }
  rl.close();
})


rl.on('close', () => {
  const x = input[0];
  const y = input[1];
  const result = {
    plus: calculator.plus(x, y),
    minus: calculator.minus(x, y),
    times: calculator.times(x, y),
    divide:  calculator.divide(x, y),
  }

  console.log(`
  Plus   Result : ${result.plus}
  Minus  Result : ${result.minus}
  Times  Result : ${result.minus}
  Divide Result : ${result.divide} 
`)
  process.exit();
})

