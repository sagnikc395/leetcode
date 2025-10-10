class Solution:
    def is_pallindrome(self,s,l,r):

        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            s -= 1
        return True  
    
    def validPallindrome(self,s):
        l = 0
        r = len(s) - 1

        while l < r:
            if s[l] != s[r]:
                return self.is_pallindrome(s,l+1,r) or self.is_pallindrome(s,l,r-1)

            l += 1
            r -= 1

        return True
    
