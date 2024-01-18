
function climbStairs(n: number): number {
   // dp using bottom up approach
   let dp = [];
    dp[0] = 1; 
    dp[1] = 1;
    for (let i = 2; i <=n; i++)
    {
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
}