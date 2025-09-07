class Solution:
    def sort_inplace(self,arr):
        i = 0
        for j in range(1,len(arr)):
            if (arr[i] != arr[j]):
                arr[i+1] = arr[j]
                i += 1

        return i+1 
