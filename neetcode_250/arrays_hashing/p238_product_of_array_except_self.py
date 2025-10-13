class Solution:
    def productExceptSelf(self,nums):
        # make 3 arrays
        # prefix, suffix and result
        n = len(nums)
        res = [0] * n
        pref = [0] * n
        suff = [0] * n

        # setting the first and last element to be 1 to make it fit 
        pref[0] = suff[n-1] = 1

        # iteratively go through and make the next item to the next 
        for i in range(1,n):
            pref[i] = nums[i-1] * pref[i-1]
        # by reversing the oreder set the next element from the prev
        for i in range(n-2,-1,-1):
            suff[i] = nums[i+1] * suff[i+1]

        # set the result value this way 
        for i in range(n):
            res[i] = pref[i] * suff[i]

        return res 
            
