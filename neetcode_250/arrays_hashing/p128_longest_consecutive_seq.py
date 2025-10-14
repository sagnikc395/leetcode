class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        nums_set = set(nums)
        longest = 0
        
        for num in nums_set:  # iterate over set, not list
            # start of a sequence
            if (num - 1) not in nums_set:
                length = 1
                while (num + length) in nums_set:
                    length += 1
                longest = max(longest, length)
        
        return longest

