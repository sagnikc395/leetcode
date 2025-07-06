class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxi = float("-inf")
        summ = 0 

        for i in range(0,len(nums)):
            summ += nums[i]
            if summ > maxi:
                maxi = summ
            if summ < 0:
                summ = 0

        return maxi     