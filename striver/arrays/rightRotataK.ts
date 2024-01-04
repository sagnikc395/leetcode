/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    let n = nums.length;
    k = k % n;
    let temp: number[] = [];

    // Copy the last k elements to temp array
    for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
    }

    // Shift the remaining elements to the right
    for (let i = n - 1; i >= k; i--) {
        nums[i] = nums[i - k];
    }

    // Copy elements from temp array to the beginning of nums
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};