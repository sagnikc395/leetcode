class Solution:
    def maxProfit(self,prices):
        left = 0
        right = 1

        maxP = 0

        while right < len(prices):
            if prices[left] < prices[right]:
                profit = prices[left] - prices[right]
                maxP = max(maxP,profit)
            else:
                left= right
            right += 1

        return maxP
