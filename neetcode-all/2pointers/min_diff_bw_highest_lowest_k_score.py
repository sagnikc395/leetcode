

class Solution:
    def minimumDifference(self,nums,k):
        '''
        want the difference between highest and lowest and want k greater;
        sort it and do a sliding window of size k.
        and get the smallest difference from them.
        '''
        nums.sort()
        l,r = 0,k-1
        
        ## max possible value
        res = float("inf")

        while r < len(nums):
            res = min(res,nums[r] - nums[l])
            l,r = l+1,r+1
        return res


if __name__ == '__main__':
    s = Solution()
    nums1,k1 = [90],1
    nums2,k2 = [9,4,1,7],2
    print(s.minimumDifference(nums1,k1))
    print(s.minimumDifference(nums2,k2))
