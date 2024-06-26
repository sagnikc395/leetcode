class Solution:
    def intersect(self, nums1, nums2):
        # tow pointer approach
        intersect = []
        nums1.sort()
        nums2.sort()

        i, j = 0, 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                intersect.append(nums1[i])
                i += 1
                j += 1
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1
        return intersect

main = Solution().intersect([1,2,2,1],[2,2])
print(main)