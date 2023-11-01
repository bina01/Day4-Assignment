function sumOfNaturalNumber(n) {
  let j = 0;
  for (let i = 1; i <= n; i++) {
    j = j + i;
  }
  return j;
}
function compute(action,n){
    return action(n)
}
console.log(compute(sumOfNaturalNumber,4));