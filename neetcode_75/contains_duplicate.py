from typing import List

class Solution:
    def containsDuplicate(self,nums: List[int]) -> bool:
        hashset = {}
        for n in nums:
            # check if already present 
            if n in hashnet:
                # already presetn return True
                return True
            # else add
            hashset.add(n)
        return False 
