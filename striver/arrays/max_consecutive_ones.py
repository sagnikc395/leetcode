class Solution:
    def findMaxConsecutiveOnes(self,nums):
        maxi = 0
        cnt = 0
        for i in range(0,len(nums)):
            if(nums[i] == 1):
                cnt += 1
                maxi = max(maxi,cnt)
            else:
                cnt = 0
        return maxi
