class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        #a default way to do that using a sorting algorithm and then check sequences,tc -> 0(nlogn)
        # create a set of init array
        numset = set(nums)
        longest = 0 

        for n in nums:
            # check if it is the start of the sequence 
            if (n-1) not in numset:
                length = 0
                while(n+length) in numset:
                    length += 1
                # update the longest 
                longest = max(longest,length)
        return longest
