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
    

## otpimization , based on 1 loop
    def diagonalSum2(self,mat):
        rows = len(mat)
        cols = len(mat)
        diag_sum = 0
        for rowno in range(0,rows):
            primaryDiag = mat[rowno][rowno]
            # secondary diagonal postion
            col = cols - rowno - 1
            secondaryDiag = mat[rowno][col]
            diag_sum += primaryDiag
            # based on some condition 
            # if row num is not same as the col, only then add secondary 
            if rowno != col:
                diag_sum += secondaryDiag

        return diag_sum 