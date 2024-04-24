class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {} # count the occurences of each character
        l = 0
        res = 0
        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r],0)
            # max of res and the size of the window 
            while(r-l+1) - max(count.values()) > k:
                # count of the current at the posn and decrement by 1 
                count[s[l]] -=1
                l += 1

            res = max(res,r-l+1)
        return res 
