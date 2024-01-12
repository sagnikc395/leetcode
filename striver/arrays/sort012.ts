//sort 0 , 1 and 2

const sort012Better = (arr: number[]): number[] => {
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      cnt0 += 1;
    } else if (arr[i] === 1) {
      cnt1 += 1;
    } else if (arr[i] === 1) {
      cnt2 += 1;
    }
  }
  for (let i = 0; i < cnt0; i++) {
    arr[i] = 0;
  }
  for (let i = cnt0; i < cnt0 + cnt1; i++) {
    arr[i] = 1;
  }
  for (let i = cnt1 + cnt2; i < arr.length; i++) {
    arr[i] = 2;
  }
  return arr;
};

//using dnf algorithm
const sort0123Optimal = (arr: number[]): number[] => {
  let low = 0,
    mid = 0,
    high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }
  return arr;
};
