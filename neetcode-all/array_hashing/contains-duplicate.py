from typing import List 

class Solution:
    def containsDuplicate(self,nums:List[int]) -> bool:
        hashSet = set()
        for i in nums:
            # check if already a duplicate or not 
            if i in hashSet:
                return True 
            # else add
            hashSet.add(i)
        
        return False


print(Solution().containsDuplicate([1,2,3,1]))
print(Solution().containsDuplicate([1,2,3,4]))
print(Solution().containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

