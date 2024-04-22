class Solution:
    def productExceptSelf(self,nums):
        # o(n) tc and O(1) mc 
        res = [1] * len(nums) 
        prefix = 1
        for i in range(len(nums)):
            res[i] *= prefix 
            # taking the input value and multiply with the prefix value
            prefix *= nums[i]
        # same with postfix 
        postfix = 1
        for i in range(len(nums) - 1,-1,-1):
            res[i] *= postfix 
            # multiplying with the value already in results 
            postfix *= nums[i]

        #return output 
        return res
        ## another approach using 2 lists 
