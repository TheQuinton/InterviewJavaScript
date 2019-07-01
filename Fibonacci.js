// fibonacci(3) === 2
function fibonacci(num){
  const result = [0,1];
  for (let i=2; i <= num; i++){
    const prevNum1 = result[i-1];
    const prevNum2 = result[i-2];
    result.push(prevNum1+prevNum2);
  }
  return result[num];
}
// Alternative with recursion
const fibonacciAlt = num => {
  if (num < 2){
    return num;
  }
  return fibonacciAlt(num-1)+fibonacciAlt(num-2);
}
