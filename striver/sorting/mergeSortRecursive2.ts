class MergeSort2 {
  arr: number[] = [];
  constructor(arr: number[]) {
    this.arr = arr;
  }

  public mergeSortRecursive() {
    this.mergeSortRecursiveUtility(0, this.arr.length - 1);
  }

  private mergeSortRecursiveUtility(low: number, high: number) {
    if (low < high) {
      const mid = Math.floor((low + high) / 2);
      this.mergeSortRecursiveUtility(low, mid);
      this.mergeSortRecursiveUtility(mid + 1, high);
      this.merge(low, mid, high);
    }
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
    console.log(this.arr);
  }
}

const arr2 = [5, 6, 7, 8, 1, 2];
const soln2 = new MergeSort2(arr2);
soln2.mergeSortRecursive();
soln2.printSortedArray();
