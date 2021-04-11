// unique sorted array
const arr = [5, 10, 15, 20, 25, 30];

function sumCombination(arr, sum) {
  const result = [];
  function getNamber(currentItem, sum, array) {
    const secondPosition = Math.floor(arr.length / 2);
    let number = arr[secondPosition];
  }
  let currentItem = arr.shift();
  while (currentItem) {
    const number = getNamber();
    if (number) result.push([currentItem, number]);
  }
}

const combinations = sumCombination(arr, 40);

console.log(combinations); // [[10,30], [15, 25]]

// Infinite Summation

function sum(...args) {
  let summary = 0;
  function calculate(...innerArgs) {
    innerArgs.forEach((el) => {
      summary = Number(summary) + Number(el);
    });
    return calculate;
  }
  calculate.toValue = function () {
    return summary;
  };

  calculate(...args);
  return calculate;
}

const value1 = sum(1)(2)(3)(4)(5).toValue();
const value2 = sum(1, 2)(3, 4)(5).toValue();
const value3 = sum(1, 2, 3, 4, 5).toValue();

console.log(value1, value2, value3); // 15 15 15
