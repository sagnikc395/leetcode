class Solution:
    def missingnumber(self,nums):
        org_sum = len(nums) * (len(nums)+1)//2
        arr_sum = sum(nums)
        return org_sum - arr_sum
