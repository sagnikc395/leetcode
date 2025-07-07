class Solution:
    def twoSum(self,nums,target):
        items = {}
        for i in range(0,len(nums)):
            comple = target - nums[i]
            if comple in items:
                return [items[comple],i]
            items[nums[i]] = i

        return [-1,-1]
