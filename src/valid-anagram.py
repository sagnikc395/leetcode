class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        ## sorting both of them and checking if same string or not
        s1 = ''.join(sorted([c for c in s]))
        s2 = ''.join(sorted([c for c in t]))
        if(s1 == s2):
            return True
        return False
