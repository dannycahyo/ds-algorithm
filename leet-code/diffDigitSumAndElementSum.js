function digitSumFunc(n) {
  console.log([...n.toString()].reduce((acc, curr) => acc + parseInt(curr), 0));
  return [...n.toString()].reduce((acc, curr) => acc + parseInt(curr), 0);
}

function computeSum(nums) {
  const elementSum = nums.reduce((acc, curr) => acc + curr, 0);
  const digitSum = nums.reduce((acc, curr) => acc + digitSumFunc(curr), 0);

  return Math.abs(elementSum - digitSum);
}

const nums = [1, 15, 6, 3];
console.log(computeSum(nums)); // 9
const number = 15;
const res = () =>
  [..."15"].reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);

console.log(res());
