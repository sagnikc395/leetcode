class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # this is just solving 2 sum but with nums[i] + nums[j] == -nums[k]
        # first sort the input array
        # if we find negative numbers, they are all closely packed together 
        # 2 loops , the inner loop will check for inner set and check for the values to negative value and present there or not
        # tc: O(n^2)
        # sc: O(1)
        res =[]
        nums.sort()
        for i, a in enumerate(nums):
            if i > 0 and a == nums[i-1]:
                continue
            l, r = i+1,len(nums)-1
            while l < r :
                # compute the sum 
                threesum = a + nums[l] + nums[r]
                if threesum > 0:
                    # decrearase
                    r -= 1
                elif threesum < 0:
                    l+=1
                else:
                    res.append([a,nums[l],nums[r]])
                    # update pointers
                    l += 1
                    while nums[l] == nums[l-1] and l < r:
                        l += 1
        return res
