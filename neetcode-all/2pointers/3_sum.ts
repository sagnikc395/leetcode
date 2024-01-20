// brute force solution :
// triple loop and try every combination of number

// to prevent our input to take the input from taking the same
// thing twice, the solution is to sort the input array first

//TC: O(n2) and space : 0(1),(inbuilt sort)

function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l] == nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  return res;
}
