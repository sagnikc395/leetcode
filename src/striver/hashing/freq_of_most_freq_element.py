#https://leetcode.com/problems/frequency-of-the-most-frequent-element/

from typing import List 

class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
    
        left = 0  # Left pointer of sliding window
        curr_sum = 0  # Sum of elements in current window
        max_freq = 0  # Maximum frequency we can achieve
        
        # Iterate through array with right pointer
        for right in range(len(nums)):
            # Add current element to window sum
            curr_sum += nums[right]
            
            # Calculate if current window is valid
            # Window is valid if we can make all elements equal to the largest element
            window_size = right - left + 1
            window_target = nums[right] * window_size
            
            # If we need more operations than k allows, shrink window
            while curr_sum + k < window_target:
                curr_sum -= nums[left]
                left += 1
                window_size -= 1
                window_target = nums[right] * window_size
            
            # Update max frequency if current window is larger
            max_freq = max(max_freq, window_size)
        
        return max_freq