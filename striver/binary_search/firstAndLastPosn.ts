function lowerBound(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;
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

function upperBound(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
function searchRange(nums: number[], target: number): number[] {
  let lb = lowerBound(nums, target);
  if (lb === nums.length || nums[lb] != target) {
    return [-1, -1];
  }
  return [lb, upperBound(nums, target) - 1];
}

function firstAndLastBinarySearch(arr: number[], target: number): number[] {
  let first = -1;
  let low = 0;
  let high = arr.length - 1;
  let last = -1;
  while (low <= high) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  low = 0;
  high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return [first, last];
}
