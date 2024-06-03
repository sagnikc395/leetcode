class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        i,j = 0,0

        # stop if either of the pointers goes out of bounds 
        while i <len(s) and j <len(t):
            if s[i] == t[j]:
                i+=1
                j+=1
            else:
                # still looking for a character to match 
                i+=1
        return len(t)-j
