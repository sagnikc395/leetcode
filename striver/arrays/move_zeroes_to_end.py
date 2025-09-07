class Soln:
    def move_zeros(self,nums):
        j = -1
        for i in range(0,len(nums)):
            if(nums[i] == 0):
                j = i
                break
        for i in range(j+1,len(nums)):
            if(nums[i] != 0):
                nums[i],nums[j] = nums[j] ,nums[i]
                j += 1

