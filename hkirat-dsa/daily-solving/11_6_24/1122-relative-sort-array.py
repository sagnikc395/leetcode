class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        arr1_count = defaultdict(int)
        arr2_set = set(arr2)
        end = []
        for n in arr1:
            # increment the count of this
            if n not in arr2:
                end.append(n)
            arr1_count[n] += 1
        end.sort()
        res = []
        # go through all elements from left to right 
        for n in arr2:
            for _ in range(arr1_count[n]):
                res.append(n)
        return res+end
