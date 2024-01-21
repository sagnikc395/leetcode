function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  //base cases
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[1], nums[0]);
  }

  //table build up
  let max_accum = new Array(nums.length).fill(0);
  max_accum[0] = nums[0];
  max_accum[1] = Math.max(nums[1], nums[0]);

  for (let i = 2; i < nums.length; i++) {
    max_accum[i] = Math.max(max_accum[i - 2] + nums[i], max_accum[i - 1]);
  }

  return max_accum[nums.length - 1];
}
