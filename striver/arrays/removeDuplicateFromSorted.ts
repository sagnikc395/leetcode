const removeDuplicatesBF = (arr: number[]): number[] => {
  // using sets
  let set = new Set<number>();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  let index = 0;
  for (let item of set) {
    arr[index] = item;
    index += 1;
  }
  return arr;
};

const removeDuplicateOptimal = (arr: number[]): number => {
  //using 2 pointers
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      arr[i + 1] = arr[j];
      i += 1;
    }
  }
  return i + 1;
};
