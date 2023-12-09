import math 
class Solution:
    def majorityElement(self,nums):
        majorityMap = {}
        for item in nums:
            if item in majorityMap:
                #increase the count
                majorityMap[item] += 1
            #else add
            else: 
                majorityMap[item] = 1

        limit = math.floor(len(nums)/2)
        items_pass = [key for key,val in majorityMap.items() if val>limit]
        return items_pass

print(Solution().majorityElement([2,2,1,1,1,2,2]))