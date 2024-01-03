//TODO need to debug !

class MergeSort {
  arr: number[] = [];
  low = 0;
  high = 0;
  mid = 0;
  constructor(arr: number[], low: number, high: number) {
    this.arr = arr;
    this.low = low;
    this.high = high;
  }

  public mergeSortRecusive() {
    this.mergeSortRecursiveUtility(this.low, this.high);
  }

  private mergeSortRecursiveUtility(low: number, high: number) {
    if (low >= high) {
      return;
    }
    let mid = Math.floor((this.low + this.high) / 2);
    this.mergeSortRecursiveUtility(this.low, mid);
    this.mergeSortRecursiveUtility(mid + 1, this.high);
    this.merge(low, mid, high);
  }

  private merge(low: number, mid: number, high: number) {
    let temp: number[] = [];
    let left: number = low;
    let right: number = mid + 1;
    while (left <= mid && right <= high) {
      if (this.arr[left] <= this.arr[right]) {
        temp.push(this.arr[left]);
        left += 1;
      } else {
        temp.push(this.arr[right]);
        right += 1;
      }
    }
    // if remaining elements then add
    while (left <= mid) {
      temp.push(this.arr[left]);
      left += 1;
    }
    while (right <= high) {
      temp.push(this.arr[right]);
      right += 1;
    }
    // mutate arr and return
    for (let i = 0; i < temp.length; i++) {
      this.arr[low + i] = temp[i];
    }
  }
  public printSortedArray() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
}

const arr = [5, 6, 7, 8, 1, 2];
const soln = new MergeSort(arr, 0, arr.length);
soln.mergeSortRecusive();
soln.printSortedArray();
