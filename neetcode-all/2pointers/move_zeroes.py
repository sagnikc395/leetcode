class Solution:
    def moveZeroes(self,nums):
        ## using the tortoise algorithm 
        # using the fast and slow pointers 

        slowPtr = 0
        for fastPtr in range(len(nums)):
            if nums[fastPtr] != 0 and nums[slowPtr] == 0 :
                nums[slowPtr] , nums[fastPtr] = nums[fastPtr],nums[slowPtr]

            if nums[slowPtr] != 0:
                slowPtr += 1

