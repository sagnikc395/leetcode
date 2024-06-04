from collections import defaultdict


class Solution:
    # def longestPallindrome(self,s):
    #     freqMap = {}
    #     for item in s:
    #         if item in freqMap:
    #             freqMap[item] += 1
    #         else:
    #             freqMap[item] = 1
        
    #     uppercase = 0
    #     lowercase = 0 
    #     for char, freq in freqMap.items():
    #         if char.isupper():
    #             uppercase += freq
    #         elif char.islower():
    #             lowercase += freq
    #     return (lowercase,uppercase)
    def longestPallindrome(self,s):
        count = defaultdict(int)
        res = 0 

        for c in s: 
            count[c] += 1
            # everytime , we get a matching pair, then increase by 2  
            if count[c] % 2 == 0:
                res += 2

        for cnt in count.values():
            if cnt % 2 == 1 :
                res += 1
                break 

        return res 

print(Solution().longestPallindrome("abccccdd"))
print(Solution().longestPallindrome("a"))
