class Solution:
    def countGoodArrays(self,n,m,k):
        return m *(m-1) ** (n-1-k) * comb(n-1,k) %(10**9+7)

