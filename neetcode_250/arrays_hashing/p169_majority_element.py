class Solution:
    def getMajorityElement(self,nums):
        freq_count = {}

        for i in range(len(nums)):
            if nums[i] in freq_count:
                freq_count[nums[i]] += 1
            else:
                freq_count[nums[i]] = 1

        sorted_freq_count = sorted(freq_count,key=lambda x:x[1],reverse=True)
        return sorted_freq_count[0][0]
