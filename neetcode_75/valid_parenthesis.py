class Solution:
    def valid_parenthesis(self,c):
        bracket_mapping = {')':'(',']':'[','}':'{'}
        stack = []
        
        for s in c:
            if s in bracket_mapping:
                if stack and stack[-1] == bracket_mapping[s]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        if not stack:
            # because perfect matching of items
            return True
        else:
            return False            
