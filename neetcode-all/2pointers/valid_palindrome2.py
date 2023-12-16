class Solution:
    def validPalindromeUtil(self,s,i,j):
        while i<j:
            if s[i] == s[j]:
                i +=1 
                j-=1
            else:
                return False
        return True

    def validPalindrome(self,s):
        i,j = 0,len(s)-1

        while i < j:
            if s[i] == s[j]:
                i+=1
                j-=1
            else:
                return self.validPalindromeUtil(s,i+1,j) or self.validPalindromeUtil(s,i,j-1)
        return True



if __name__ == '__main__':
    s = Solution()
    r1 = "aba"
    r2 = "abca"
    r3 = "abc"

    print(s.validPalindrome(r1))
    print(s.validPalindrome(r2))
    print(s.validPalindrome(r3))

        
