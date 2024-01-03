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

const secondLargestBetter = (arr: number[]): number => {
  let largest = Number.MIN_SAFE_INTEGER;
  arr.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  let seclargest = Number.MIN_SAFE_INTEGER;
  arr.forEach((item) => {
    if (item > seclargest && seclargest !== largest) {
      seclargest = item;
    }
  });
  return seclargest;
};

const secondLargestOptimal = (arr: number[]): number => {
  let largest = arr[0];
  let seclargest = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    let temp = largest;
    if (arr[i] > largest) {
      largest = arr[i];
      seclargest = temp;
    } else if (arr[i] < largest && arr[i] > seclargest) {
      seclargest = arr[i];
    }
  }
  return seclargest;
};
