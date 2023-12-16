class Solution:
    def isPalindrome(self,s):
        if(s==""):
            return True 
        else:
            s = ''.join(s.lower().split(" "))
            s = ''.join(ch for ch in s if ch.isalnum())
            q = s[::-1]
            if(s==q):
                return True
            else:
                return False


if __name__ == '__main__':
    s = Solution()
    r1 = "A man, a plan, a canal: Panama"
    r2 = "race a car"
    r3 = " "
    print(s.isPalindrome(r1))
    print(s.isPalindrome(r2))
    print(s.isPalindrome(r3))