function threeSum(nums: number[]): number[][] {
  let res: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let three = nums[i] + nums[left] + nums[right];
      if (three > 0) {
        right -= 1;
      } else if (three < 0) {
        left += 1;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1;
        }
      }
    }
  }
  return res;
}
