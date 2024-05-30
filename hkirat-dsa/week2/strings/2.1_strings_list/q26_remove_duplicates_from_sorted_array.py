'''
given an integer array , in sorted in ascending order , might have duplicate elments,
need to remove the duplicates in-place.

cannot take an extra array to solve the problem.

need to keep the relative ordering the same.
[0,0,1,1,1,2,2,3,3,4]
[0,1,2,3,4,_,_,_,_,_]

in the solution, they will only check the number of elements in the valid array 

'''

'''
Soln : 0(N) -> single traversal 
O(1)

Todo:
1. arrange this array, by removing the duplicates and maintaining the sorted fashion 
2. return the number of unique elements, i.e k 

Obs:
1. Duplicate elments will always lie adjacent to each other.
2. Can't use hashmap , as it will take extra space.


Soln:
1. Idea is to use 2 pointers.
2. Pointer1 -> current position of the resultant array. -> array after removing the duplicate element.
3. Pointer2 -> traverse the current array 
4. prev -> prev unique element that we encountered.
5. prev -> float('-inf') to denote that we havent seen any prev no yet.
'''



class Solution:
    def remove_duplicates(self,nums):
        pass