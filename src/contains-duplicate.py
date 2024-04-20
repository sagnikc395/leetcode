class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()

        for v in nums:
            # first check if already exists 
            if v in hashset:
                # duplicate found 
                return True 
            # else add to value 
            hashset.add(v)
        return False
