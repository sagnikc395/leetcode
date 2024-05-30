class Solution:
    def sortedSquares(self,nums):
        # brute force -> square individual and sort it 
        output = [i ** 2 for i in nums]
        output.sort()
        return output
    def sortedSquaresOptimized(self,nums):
        res = []
        index = len(nums)-1
        l = 0
        r = len(nums)-1
        while l<=r:
            sqLeft = nums[l] *nums[l]
            sqRight = nums[r] * nums[r]
            if(sqRight >= sqLeft):
                res[index] = sqRight 
                r--
            else:
                res[index] = sqLeft 
                l++
            index--
        return res 