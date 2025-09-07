#https://www.geeksforgeeks.org/problems/reverse-an-array/0

class Solution:
    def swap(self,arr,l,r):
        arr[l],arr[r] = arr[r],arr[l]
        
    def reverseArrayUtil(self,arr,i):
        if(i>=len(arr)/2):
            return 
        self.swap(arr,i,len(arr)-i-1)
        self.reverseArrayUtil(arr,i+1)
        
    
    def reverseArray(self, arr):
        # code here
        return self.reverseArrayUtil(arr,0)
        