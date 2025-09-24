from typing import List

class Solution:
    def containsDuplicate(self,nums:List[int]) -> bool:
        hashset = set()

        for i in nums:
            if i in hashset:
                # items aleady present so duplicate
                return True
            hashset.add(i)
        return False
