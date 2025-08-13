class Soln:
    def validAnagram(self,s: str,t: str) -> bool:

        # if lengths are not equal then obv not a anagram
        if len(s) != len(t):
            return False

        # using a freq arra
        freq = [0] * 26

        p1, p2  = 0 ,0

        while p1 < len(s) and p2 < len(t):
            freq[ord(s[p1]) - ord('a')] += 1
            # remove the same count in t 
            freq[ord(t[p2]) - ord('a')] -= 1

            p1 += 1
            p2 += 1

        for count in freq:
            # if count is not 0 then not a anagram
            if count ! = 0:
                return False

        return True
