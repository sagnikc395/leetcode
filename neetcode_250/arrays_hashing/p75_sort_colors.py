class Solution:
    def sortColors(self,nums):
        count0 = 0
        count1 = 0
        count2 = 0

        for i in nums:
            if i == 0 :
                count0 += 1
            elif i == 1:
                count1 += 1
            elif i == 2:
                count2 += 1

        idx = 0
        while count0 > 0 :
            nums[idx] = 0
            idx += 1
            count0 -=1

        while count1 > 0:
            nums[idx] = 1
            idx += 1
            count1 -= 1

        while count2 > 0:
            nums[idx] = 2
            idx += 1
            count2 -= 1

            
