//2 sum using 2 loops

type TwoSumResult = [number, number];

const twoSumBF = (arr: number[], k: number): TwoSumResult => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
//better solution using hashing
const twoSumHashing = (arr: number[], k: number): TwoSumResult => {
  let map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    let diff = k - arr[i];
    if (map.get(diff)) {
      return [map.get(diff)!, i];
    }
    //set the value
    map.set(arr[i], i);
  }
  return [-1, -1];
};

// using 2 pointers and greedy
const twoSum2pointers = (arr: number[], k: number): boolean => {
  let left = 0,
    right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === k) {
      return true;
    } else if (sum < k) {
      left += 1;
    } else {
      right += 1;
    }
  }
  return false;
};
