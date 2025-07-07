class Solution:
    def secondLargest(self,arr):
        # using the 2 pointer approach 
        largest = arr[0]
        slargest = -1 

        for i in range(1,len(arr)):
            if arr[i] > largest:
                slargest = largest
                largest = arr[i]
            elif arr[i] < largest and arr[i] > slargest:
                slargest = arr[i]

        return slargest

    
                
