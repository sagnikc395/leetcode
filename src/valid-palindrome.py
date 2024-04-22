class Solution:
    def isPalindrome(self, s: str) -> bool:
        # remove the spaces, and other characters present in it and reverse the string and check
        # better approach without using a new varibales, using pointers 
        #left pointer and right pointer and check until the left passed the right ,
        # the left pointer passed the right pointer, or maybe they meet exactly at the same character.
    
        l,r = 0 ,len(s)-1
        while l < r :
            while l < r and not self.alphaNum(s[l]):
                l+=1
            while r > l and not self.alphaNum(s[r]):
                r-=1
            if s[l].lower() != s[r].lower():
                return False
            ## update our pointers 
            l+=1 
            r-=1
        return True 

    def alphaNum(self,c):
        #using ord to get ascii 
        # checking if is uppercase 
        return (ord('a')<= ord(c) <= ord('z') or
                ord('A')<= ord(c) <= ord('Z') or
                ord('0')<= ord(c) <= ord('9'))
