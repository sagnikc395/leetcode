class Solution:
    # TC: O(m) + o(n) + o((m+n)log(m+n)) +O(M+N) -> O((M+N)log(M+N))
    # SC: O(M+n)
    def merge(self, nums1, nums2, m, n):
        combinedArray = [None for i in range(m + n)]
        for i in range(0, m):
            combinedArray[i] = nums1[i]
        for i in range(0, n):
            combinedArray[m + i] = nums2[i]

        # sort it
        combinedArray.sort()
        for i in range(0, len(combinedArray)):
            nums1[i] = combinedArray[i]
