class Solution:
    def isPalindrome(self,x):
        if x <0:
            return False
        orig = x
        rev = 0
        while x!=0:
            last = x % 10
            rev = rev * 10 + last
            x = x // 10
        if orig == rev:
            return True
        return False
