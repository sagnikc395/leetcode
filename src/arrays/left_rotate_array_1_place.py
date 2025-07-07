class Soln:
    def left_rotate_arr(self,arr):
        temp = arr[0]
        for i in range(1,len(arr)):
            arr[i-1] = arr[i]
            arr[len(arr)-1] = temp
        return arr

    
