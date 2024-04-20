class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = {}
        for k,v in enumerate(nums):
            #check difference is in res or not 
            diff = target - v 
            if diff in res:
                #return the indices 
                return [res[diff],k]
            # else add it to the map 
            res[v] = k
