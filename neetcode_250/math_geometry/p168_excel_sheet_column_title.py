class Solution:
    def convertToTitle(self,columnNumber):
        mods = []
        while columnNumber > 0:
            columnNumber -= 1
            mods.append(columnNumber % 26)
            columnNumber // = 26

        return ''.join(chr(65+m) for m in reversed(mods))

    
