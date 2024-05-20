
class Solution:
  def transpose(self,matrix):
    r = len(matrix)
    c = len(matrix[0])    
    output = [[]]
    for i in range(0,r):
      for j in range(0,c):
        output[i][j] = matrix[i][j]
    return output 