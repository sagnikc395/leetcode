import sys 

class Solution:
    def second_smallest(self,arr):
        smallest = arr[0]
        ssmallest = -1 * sys.max_size  
        for i in range(1,len(arr)):
            if arr[i] < smallest:
                ssmallest = smallest
                smallest = arr[i]
            elif(arr[i] != smallest and arr[i] < ssmallest):
                ssmallest = arr[i]

        return ssmallest

    
