# for interviews clarify the question to the interview to know
#  what type to optimize
# 
#  same as in real-world as for the engineers to calrify and solve the
#  question
class Solution:
  def diagonalSum(self, matrix):
    r = len(matrix)
    c = len(matrix[0])
    summ = 0
    for i in range(0, r):
      primar_diag = matrix[i][i]
      col_num = c - i - 1 
      secondary_diag = matrix[i][col_num]
      summ += primar_diag
      
      if i != col_num:
        summ += secondary_diag
      
    return summ 

print(Solution().diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))



            
      
