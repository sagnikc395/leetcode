##https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-1-to-n-without-using-loops
class Solution:
    def printWithoutLoop(self,n,i):
        if i > n:
            return
        print(i,end=' ')
        return self.printWithoutLoop(n,i+1)

    #Complete this function
    def printNos(self,n):
        #Your code here
        self.printWithoutLoop(n,1)
