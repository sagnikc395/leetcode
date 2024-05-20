# p977 squares of a sorted array 
# array is sorted in a non-descreasing -> increasing order 
# if arrays was not sorted we could have solved this differently.

# -4,-1,0,3,10 -> 16,1,0,9,100
# sort this and return that -> 0,1,9,16,100

#brute force appraoch -> square each item and sort it

class Solution:
    # brute force approach -> TC. O(N)+O(NlogN)-> O(NlogN)
    def sortedSquares(self,nums):
        res = [int(pow(item,2)) for item in nums]
        res.sort()
        return res 
    
print(Solution().sortedSquares([-4,-1,0,3,10]))
