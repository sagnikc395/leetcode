const subArraySumEqualsKBF = (arr: number[], k: number): number => {
  let len: number = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        len = Math.max(len, j - i + 1);
        sum = 0;
      }
    }
  }
  return len;
};

console.log(subArraySumEqualsKBF([1, 1, 1, 3], 3));
