from typing import List

class NumMatrix:
    def __init__(self,matrix: List[List[int]]) -> None:
        # getting the rows and cols
        ROWS, COLS = len(matrix), len(matrix[0])
        # increase the col count 
        self.sumMat = [[0] * (COLS+1) for _ in range(ROWS+1)]

        # and calculate the prefix sum
        for r in range(ROWS):
            prefix = 0
            for c in range(COLS):
                prefix += matrix[r][c]
                above = self.sumMat[r][c+1]
                self.sumMat[r+1][c+1] = prefix + above

        
    def sumRegion(self,row1:int,col1:int,row2:int,col2: int) -> int:
        row1 +=1
        col1 +=1
        row2 +=1
        col2 +=1

        bottomRight = self.sumMat[row2][col2]
        above = self.sumMat[row1-1][col2]
        left = self.sumMat[row2][col1-1]
        topLeft = self.sumMat[row1-1][col1-1]
        return bottomRight - above - left + topLeft
           
    
