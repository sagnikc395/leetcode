const bubbleSort = (arr: number[]) => {
  let n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
};

bubbleSort([45, 6, 7, 1, 2]);

const bubbleSortOpt = (arr: number[]) => {
  //optimzied version of the bubble sort
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let didSwap = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
  }
  console.log(arr);
};

bubbleSortOpt([1,2,3,4,5,6,7]);
