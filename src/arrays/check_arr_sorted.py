class Soln:
    def check_if_sorted(self,arr):
        for i in range(1,len(arr)):
            if(arr[i] > arr[i-1]):
                continue
            else:
                return False

        return True 
