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
