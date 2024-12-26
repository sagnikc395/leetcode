# https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1

import math 

total = 0 

class Solution:
        
    def sumOfSeries(self,n):
        global total
        #code here
        if n==0:
            return 0
        self.sumOfSeries(n-1)
        total = total + n*n*n
        return total
        