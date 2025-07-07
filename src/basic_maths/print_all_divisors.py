# https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1

import math

class Solution:
    def get_divisors(self,n):
        divisors = []
        sqrtN = int(math.sqrt(n))
        for i in range(1,sqrtN+1):
            if n % i == 0:
                divisors.append(i)
                if i != n //i:
                    divisors.append(n//i)
        return sum(divisors)


    def sumOfDivisors(self,n):
        res = 0
        for i in range(1,n+1):
            res += self.get_divisors(i)

        return res
