class Soln:
    def linear_search(self,arr,target):
        for i in range(0,len(arr)):
            if arr[i] == target:
                return i

        return -1 
