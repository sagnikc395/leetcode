function maxFrequency(nums: number[], k: number): number {
    let ans: number = 0;
    let summ: number = 0;

    nums.sort((a, b) => a - b);

    let l: number = 0;
    for (let r = 0; r < nums.length; r++) {
        summ += nums[r];
        while (summ + k < nums[r] * (r - l + 1)) {
            summ -= nums[l];
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }

    return ans;
};