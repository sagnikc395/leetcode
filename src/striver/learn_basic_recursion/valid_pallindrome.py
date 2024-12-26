# https://leetcode.com/problems/valid-palindrome/description/

class Solution:
    def pallindromeCheckUtil(self,s,i):
        if (i>=len(s)/2):
            return True
        if(s[i] != s[len(s)-i-1]):
            return False 
        return self.pallindromeCheckUtil(s,i+1)

    def isPalindrome(self, s: str) -> bool:
        if not s or s.isspace():
            return True 

        import re 
        s = re.sub(r'[^a-zA-Z0-9]', '', s)
        s = s.lower()
        
        return self.pallindromeCheckUtil(s,0)