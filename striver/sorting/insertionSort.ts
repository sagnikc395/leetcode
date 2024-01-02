const insertionSort = (arr: number[]) => {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j - 1] = temp;
      j--;
    }
  }
  console.log(arr);
};

insertionSort([5, 4, 1, 2, 3]);
