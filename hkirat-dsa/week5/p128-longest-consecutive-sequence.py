class Solution:
    # using a hashset based solution
    def longestConsecutive(self, nums: List[int]) -> int:
        itemSet = set()
        for i in nums:
            itemSet.add(i)
        
        maxLen = 0
        for item in itemSet:
            if ((item-1) in itemSet) == False:
                lenn = 1
                while (item+ lenn) in itemSet:
                    lenn +=1
                maxLen = max(maxLen,lenn)


        return maxLen
