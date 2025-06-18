class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        nums_length = len(nums)

        divided_arrays = []

        for i in range(0,nums_length,3):
            subarr = nums[i:i+3]

            if len(subarr) < 3 or subarr[2] - subarr[0] > k:
                return []

            divided_arrays.append(subarr)
        
        return divided_arrays
