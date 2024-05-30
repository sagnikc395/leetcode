class Solution:
    def diagonalSum(self, mat):
        # common item will be the center of the digonal
        rows = len(mat)
        cols = len(mat[0])
        diag_sum = 0 
        for i in range(0,rows):
            for j in range(0,cols):
                if i == j:
                    diag_sum += mat[i][j]
                elif i+j == rows-1 and i!=j:
                    diag_sum += mat[i][j]
        return diag_sum
    

