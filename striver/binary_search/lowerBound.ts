function lowerBound(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
