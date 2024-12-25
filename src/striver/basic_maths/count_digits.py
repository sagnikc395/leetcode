#https://www.geeksforgeeks.org/problems/count-digits5716/1
class Solution:
    def evenlyDivides(self, n):
        # code here
        cnt = 0
        while n > 0:
            cnt += 1
            n = n // 10
        return cnt
