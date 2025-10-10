import re 

class Solution:
    def isPallindrome(self,s):
        # remove all non-alphanumeric characters
        non-alpha = re.sub(r'^[a-zA-Z0-9]', '',s)
        # convert to lowercase
        lower_str = non-alpha.lower()
        # remove spaces
        clean_str = " ".join(lower_str)

        if clean_str == clean_str[::-1]:
            return True
        return False

    # using 2 pointers approach
    def isPallindrome_twopointer(self,s):
        left = 0
        right = len(s) - 1

        while left < right:

            while left < right and s[left].isalnum():
                left += 1

            while left < right and s[right].isalnum():
                right -= 1

            if s[left].lower() != s[right].lower():
                return False

            left += 1
            right -= 1

        return True  
                
            
