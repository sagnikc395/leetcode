const unionArrayBF = (arr1: number[], arr2: number[]): number[] => {
  let set = new Set<number>();

  arr1.forEach((item) => set.add(item));
  arr2.forEach((item) => set.add(item));
  return [...set];
};

const unionArrayOptimal = (arr1: number[], arr2: number[]): number[] => {
  let union: number[] = [];

  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        //length 0 meaning we are taking this for the first time
        union.push(arr1[i]);
      }
      i += 1;
    } else {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        //length 0 meaning we are taking this for the first time
        union.push(arr2[i]);
      }
      j += 1;
    }
  }

  //what if one got exhuasted nad then the second not and vice versa
  while (j < arr2.length) {
    if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
      //length 0 meaning we are taking this for the first time
      union.push(arr2[i]);
    }
    j += 1;
  }
  while (i < arr1.length) {
    if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
      //length 0 meaning we are taking this for the first time
      union.push(arr1[i]);
    }
    i += 1;
  }

  return union;
};
