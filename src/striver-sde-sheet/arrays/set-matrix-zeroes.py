#https://leetcode.com/problems/set-matrix-zeroes/
#
class Solution:
    def setZeroes(self,matrix:List[List[int]]) -> None:
        n = len(matrix)
        m = len(matrix[0])

        row = [0] * n
        col = [0] * m

        # traverse the matrix
        for i in range(n):
            for j in range(m):
                if matrix[i][j] == 0:
                    # mark the row 1 
                    row[i] = 1
                    # mark the col 1 
                    col[j] = 1


        # mark rest as 0
        for i in range(n):
            for j in range(m):
                if row[i] or col[j]:
                    matrix[i][j] = 0

        return matrix
