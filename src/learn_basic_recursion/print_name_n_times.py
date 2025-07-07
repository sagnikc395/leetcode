##https://www.geeksforgeeks.org/problems/print-gfg-n-times/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-gfg-n-times
class Solution:
    def printGFGTimes(self,n,i):
        if i > n:
            return
        print("GFG",end=" ")
        return self.printGFGTimes(n,i+1)

    def printGfg(self, n):
        # Code here
        self.printGFGTimes(n,1)
