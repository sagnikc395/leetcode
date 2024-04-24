class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # brute force: check every substring and check if it has some duplicates or not and return the longest one 
        # o(n^2) -> every substring we have to check, and each substring also will have duplicated.
        # sliding window can remove this duplicate work -> our subarray always contains not duplicates
        # shrinking our sliding window from the left , it it contains any duplicates
        # and also can use a set to check if item is an duplicate or not in our bucket
        hashset = set()
        l = 0
        res = 0 
        # right pointer will go through every single character 
        for r in range(len(s)):
            while s[r] in hashset:
                #duplicate , update window 
                hashset.remove(s[l])
                l+=1
            # else add the rightmost character to the set 
            hashset.add(s[r])
            # update the current max window size
            res = max(res,r-l+1)
        return res


        
