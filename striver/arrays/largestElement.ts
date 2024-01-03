// given an array need to find the largest element

const largestElement = (arr: number[]): number => {
  let largest = Number.MAX_SAFE_INTEGER;
  arr.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
};