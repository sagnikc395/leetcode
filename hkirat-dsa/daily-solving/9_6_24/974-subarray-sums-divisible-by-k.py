from collections import defaultdict

class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        mp = defaultdict(int)
        mp[0] = 1
        summ = 0
        ans = 0

        for num in nums:
            summ += num
            rem = (summ % k + k) % k
            mp[rem] += 1
            if mp[rem] > 1:
                ans += mp[rem] - 1
        return ans 
