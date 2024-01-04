//TODO: bruteforce interseciton of arrays.

const intersectionArrayOptimal = (arr1: number[], arr2: number[]): number[] => {
  let i = 0;
  let j = 0;
  let arr: number[] = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i += 1;
    } else if (arr1[i] > arr2[j]) {
      j += 1;
    } else {
      arr.push(arr[i]);
      i += 1;
      j += 1;
    }
  }
  return arr;
};
