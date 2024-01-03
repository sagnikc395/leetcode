const secondLargestBF = (arr: number[]): number => {
  arr.sort((a, b) => a - b);
  let largest = arr[arr.length - 1];
  let sec_largest = 0;
  let n = arr.length - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] != largest) {
      sec_largest = arr[i];
      break;
    }
  }
  return sec_largest;
};
