#https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1

class Solution:
    def gcd(self,a,b):
        if a==0:
            return b
        if b ==0:
            return a

        if a==b:
            return a

        if a>b:
            return self.gcd(a-b,b)
        return self.gcd(a,b-a)


    def lcmAndGcd(self,a,b):
        lcm = (a*b) // self.gcd(a,b)

        return [lcm,self.gcd(a,b)]
