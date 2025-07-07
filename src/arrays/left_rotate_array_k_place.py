class Soln:
    def rotate_k(self,arr,k):
        n = k % len(arr)
        temp = arr[0:k]
        for i in range(k,n):
            arr[i-k] = arr[i]
        for i in range(n-k,n):
            arr[i] = temp[i-(n-k)]
