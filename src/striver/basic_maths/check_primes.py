# https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

import math

class Solution:
    def minJumps(self,n):
        cnt = 0

        for i in range(1,int(math.sqrt(n))+1):
            if n % i ==0:
                cnt += 1

                if n //i != i:
                    cnt += 1

        if cnt == 2: return True
        else:
           return False
