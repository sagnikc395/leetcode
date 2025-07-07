class Solution:
    def insertion_sort(self,arr,n):
        for j in range(0,n):
            j = i
            while(j > 0 and arr[j-1] > arr[j]):
                arr[j-1],arr[j] = arr[j], arr[j-1]
                j=j-1
