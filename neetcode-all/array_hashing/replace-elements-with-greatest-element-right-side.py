class Solution:
    def nextGreatest(arr, index):
        for i in range(0, len(arr), 1):
            next = -1
            for j in range(i + 1, len(arr), 1):
                if arr[i] < arr[j]:
                    next = arr[j]
                    break

    def replaceElement(self, arr):
        res = []
        for i in range(0, len(arr) - 1):
            res.append(self.nextGreatest(arr, i))

        res.append(-1)
        return res


print(Solution().replaceElement([17, 18, 5, 4, 6, 1]))
print(Solution().replaceElement([400]))
