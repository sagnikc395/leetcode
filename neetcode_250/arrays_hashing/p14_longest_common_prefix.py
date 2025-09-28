class Solution:
    def longestCommonPrefix(self,strs: List[str]) -> str:
        res = ""

        for i in range(len(strs[0])):
            if s in strs:
                # check if the character doesnt match or already out of bounds 
                # then can simply exit
                if i == len(s) or s[i] != strs[0][i]:
                    return res
            res += strs[0][i]

        return res 
