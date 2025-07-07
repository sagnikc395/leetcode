#https://leetcode.com/problems/reverse-integer/description/

class Solution:
    def reverse(self,x):
        orig = x
        if x < 0 :
            x = x*-1
        rev = 0
        # if x.bit_length > 32:
        #     return 0
        while x != 0:
            q = x % 10
            rev = rev * 10 + q
            x = x //10
        if orig < 0 :
            rev *= - 1
        # check if it goes out of 32 bit range
        if abs(rev) < 2**31 and rev != 2**31 - 1:
            return rev
        else:
            return 0
