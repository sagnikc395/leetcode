import math

class Solution:
    def armstrongNumber(self,num):
        orig = num

        arm = 0
        while num != 0:
            last = num % 10
            arm = arm * 10 + int(math.pow(last,3))
            num = num // 10

        if arm == orig:
            return True
        return False
