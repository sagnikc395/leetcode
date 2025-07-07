class Solution:
    def moveZeros(self,nums):
        temp = []
        n = len(nums)
        for i in range(0,n):
            if nums[i] != 0:
                temp.append(nums[i])

        for i in range(0,len(temp)):
            nums[i] = temp[i]

        for i in range(len(temp),len(nums)):
            nums[i] = 0
