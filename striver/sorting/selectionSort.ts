const selectionSort = (arr: number[]): void => {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    //swap
    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
};

selectionSort([4, 5, 6, 7, 1, 2]);
