class Solution:
    def reverse_string(self,s):
        # dont return
        first = 0
        last = len(s) - 1

        # classic 2 pointer approach
        while first < last:
            s[first] ,s[last] = s[last],s[first]
            first += 1
            last -= 1
            
