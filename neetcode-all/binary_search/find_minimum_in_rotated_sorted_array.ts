//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// using the sorting property with bs even if the array rotated
// if rotated n times , then it will be sorted in the original sorted order

// soln1: find the pivot where the elements are not in increasing order

// left , right and a middle pointer. now have to check , are we gonna search to the left or to the right?
// since roated we have 2 portions of the array which are sorted , are we currently in the left sorted portion or the right sorted portion ?
// if we are in the left sorted portion do we want to search in the right sorted portion

// if we are in the right osrted portion , we want to search in the left sorted portion.

function findMin(nums: number[]): number {
  let res = nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < nums[right]) {
      //then we can update our result potentially
      res = Math.min(res, nums[left]);
      break;
    }
    let mid = Math.floor((left + right) / 2);
    res = Math.min(res, nums[mid]);
    //check if part of the left sorted portion
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
}
