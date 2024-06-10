class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        #using bucket sorted
        expected = sorted(heights)
        ct = 0 
        for i in range(len(heights)):
            if heights[i] != expected[i]:
                ct += 1
        return ct
