class Solution:
    def maximumDifference(self,nums):
        maximum = inf
        max_diff = -1
        for x in nums:
            if x > maximum:
                max_diff = max(max_diff,x-maximum)
            else:
                maximum = x
        return max_diff 
