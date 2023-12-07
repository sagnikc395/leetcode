from typing import List 
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        res = []
        for i in range(0, len(nums)):
            res.append(nums[i])
        # counter = len(res)
        for i in range(0, len(nums)):
            res.append(nums[i])

        return res
