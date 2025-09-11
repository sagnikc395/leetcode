class Solution:
    # https://leetcode.com/problems/single-number/description/
    def singleNumber(self,nums):
        # the number which is not similar would be 0 if xored with itself
        # so running through the loop and xoring the numbers with itself and finding the
        # non-duplicate number
        result = 0
        for item in nums:
            result = result ^ item
        return result
    
