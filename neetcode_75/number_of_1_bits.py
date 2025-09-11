# https://leetcode.com/problems/number-of-1-bits/description/
class Solution:
    def hammingWeight(self,n):
        # i.e find the number of set bits in the binary form of the number
        result = 0
        while n:
            n &= n - 1
            result += 1
        return res

    
