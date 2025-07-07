class Solution:
    def singleNumber(self,nums):
        item_count = {}
        for i in nums:
            if i in item_count:
                item_count[i] += 1
            else:
                item_count[i] = 1

        for i in nums:
            if item_count[i] == 1:
                return i
