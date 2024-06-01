#https://leetcode.com/problems/score-of-a-string/?envType=daily-question&envId=2024-06-01

class Solution:
    def scoreOfString(self,s):
        runningScore = 0 
        left = 0 
        right = 1
        while right < len(s):
            res = abs(ord(s[left])- ord(s[right]))
            runningScore += res 
            left += 1
            right += 1
        return runningScore