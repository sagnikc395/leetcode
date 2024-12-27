# https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0
class Solution:
    # Function to count the frequency of all elements from 1 to N in the array.
    def frequencyCount(self, arr):
        n = len(arr)
        visited = [0] * n
        for i in range(n):
            count = 1
            for j in range(i + 1, n):
                if (arr[i] == arr[j]):
                    visited[j] +=1
                count += 1
        
        return visited
