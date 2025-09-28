class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0 
        for i in range(len(nums)):
            # if we see a 2nd val, we are gonna ignore
            if nums[i] != val:
                # partition 
                nums[k] = nums[i]
                k += 1
        return k 
        
