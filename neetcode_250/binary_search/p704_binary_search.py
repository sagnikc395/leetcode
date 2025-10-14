class Soln:
    def search(self,nums,target):

        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + ((right-left)//2)

            if arr[mid] == target:
                return mid

            elif arr[mid] < target:
                left = mid + 1

            else:
                right = mid - 1

        return -1 
