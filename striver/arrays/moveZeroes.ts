const moveZeroesBF = (arr: number[]) => {
  let temp: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp[i] = arr[i];
    }
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
};

const moveZeroesOptimal = (arr: number[]) => {
  //using 2 pointer approach
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j += 1;
    }
  }
};
