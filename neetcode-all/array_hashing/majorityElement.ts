function findMajorityItems(nums: number[]): number | null {
  const majorityMap: { [key: number]: number } = {};

  for (const item of nums) {
    if (item in majorityMap) {
      majorityMap[item] += 1;
    } else {
      majorityMap[item] = 1;
    }
  }

  const limit = Math.floor(nums.length / 2);
  for (const key in majorityMap) {
    if (majorityMap[key] > limit) {
      return parseInt(key, 10);
    }
  }
  return null;
}
