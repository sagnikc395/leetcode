class Solution:
    def reverseString(self,s):
        ## swapping items
        l=0
        r = len(s)-1
        while l<r:
            s[l],s[r] = s[r],s[l]
            l += 1
            r -=1



if __name__ == '__main__':
    s1 = ["h","e","l","l","o"]
    print(Solution().reverseString(s1))
    s2 = ["H","a","n","n","a","h"]
    print(Solution().reverseString(s2))

