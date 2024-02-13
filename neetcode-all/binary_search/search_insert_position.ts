//p35

function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
