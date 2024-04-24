class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # basically need to check the region where the spread is more
        # keep a left pointer at day1  and a right pointer on day2
        # and check the current profit and see the profit is going down
        # right is the day we sell and left is buy
        # if right < left , then update left and update right and recalc profit 
        l,r =0,1
        maxP = 0
        while r < len(prices):
            if prices[l] < prices[r]:
                #still profitable
                profit = prices[r] - prices[l]
                maxP = max(profit,maxP)
            else:
                # shift the pointer 
                l = r
            r += 1
        return maxP
        
        
