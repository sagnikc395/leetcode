class Solution:
    def transpose(self,matrix):
        rows = len(matrix)
        # picking the matrix and calc the size of the first row ; could be 1 or 2 etc.
        cols = len(matrix[0])
        # dimensions change from rows*cols -> cols*rows
        output = [[None for x in range(rows)]for y in range(cols)]
        
        #1. using vanilla for loop, where we use index for each loop
        for i in range(0,rows):
            for j in range(0,cols):
                output[j][i] = matrix[i][j]

        return output 
    