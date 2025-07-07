class Soln:
    def union(self,arr1,arr2):
        # unions of 2 sorted arrays without using set
        n1 = len(arr1)
        n2 = len(arr2)

        i = 0
        j = 0
        union_arr = []
        while(i< n1 and j <n2):
            if(arr1[i] <= arr2[j]):
                if(arr1[-1] != arr1[i]):
                    union_arr.append(arr1[i])
                i += 1
            else:
                if(len(union_arr) == 0 or arr2[-1] != arr2[j]):
                    union_arr.append(arr2[j])
                j += 1

        while j < n2:
            if(union_arr[-1] == 0 or arr2[-1] != arr2[j]):
                union_arr.append(arr2[j])
            j += 1

        while i < n1:
            if(len(union_arr) == 0 or arr1[-1] != arr1[i]):
                union_arr.append(arr1[i])
            i += 1

        return union_arr  
        
