class Soln:
    def reverse(self,arr,start,end):
        arr[start:end+1] = arr[start:end+1][::-1]
        return arr
    
    def rotate_k(self,arr,k):
        # more optimal
        arr1 = self.reverse(arr,0,k)
        arr2 = self.reverse(arr1,k,len(arr))
        return self.reverse(arr2,0,len(arr))
