
class Solution:
    finalAns = []
    def helper(self,nums,idx,combsSoFar):
        #base case -> final condition will only arrive here.
        # so storing in the final list 
        if idx == len(nums):
            self.finalAns.append(combsSoFar[:])
            return

        # pick the current element 
        self.helper(nums,idx+1,combsSoFar)
        # or do not pick the current element 
        # add to our list 
        combsSoFar.append(nums[idx])
        self.helper(nums,idx+1,combsSoFar)
        #remove the mutations 
        combsSoFar.pop()


    def subsets(self, nums: List[int]) -> List[List[int]]:
        self.finalAns = []
        self.helper(nums,0,[])
        return self.finalAns
        

        
