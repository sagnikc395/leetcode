// given an array having both pos and negative numbers find the maximum sum out of all the the subarrays

const maxSumSubarray = (arr: number[]): number => {
  if (arr.length === 1) {
    return arr[0];
  }
  let sum = 0;
  let maxi = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxi) {
      maxi = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return sum;
};

//printing the subarray with the maxium sum
const printSubArrayWithMaxSum = (arr: number[]): void => {
  let sum = 0;
  let maxi = Number.MIN_SAFE_INTEGER;
  let ansStart = -1;
  let ansEnd = -1;
  let start = 0;
  if (arr.length === 1) {
    console.log(`${arr[0]} - ${arr[0]}`);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (sum == 0) {
      start = i;
    }
    sum += arr[i];
    if (sum > maxi) {
      maxi = sum;
      ansStart = start;
      ansEnd = i;
      console.log(`${arr[ansStart]} - ${arr[ansEnd]}`);
    }
    if (sum < 0) {
      sum = 0;
    }
  }
};
