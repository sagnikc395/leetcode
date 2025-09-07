# https://leetcode.com/problems/binary-search/description/

from typing import List 

class Solution:
    def search(self, arr: List[int], target: int) -> int:
        n = len(arr)
        low = 0 
        high = n - 1

        while low <= high:
            mid = (low+high)//2
            if arr[mid] == target:
                return mid 
            elif arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        
        return -1
        
