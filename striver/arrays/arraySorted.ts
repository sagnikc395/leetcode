const checkArraySorted = (arr: number[]): boolean => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else {
      return false;
    }
  }
  return true;
};
