function kInversePairs(n: number, k: number): number {
  const numWays: number[] = new Array(k + 1).fill(0);
  numWays[0] = 1; // Base case: 0 inverse pairs
  // Initialize the prefix sums array of numWays for efficient range sum queries
  const prefixSums: number[] = new Array(k + 2).fill(1);
  prefixSums[0] = 0; // Base case
  // Define the modulus value to prevent integer overflow in calculations
  const mod: number = 1e9 + 7;
  // Iterate over the integers from 1 to n
  for (let i = 1; i <= n; i++) {
    // Iterate over the possible number of inverse pairs from 1 to k
    for (let j = 1; j <= k; j++) {
      // Calculate the number of ways to form j inverse pairs with i numbers.
      // This is done by calculating the range sum from the prefix sum array and adjusting for the modulus.
      numWays[j] =
        (prefixSums[j + 1] - prefixSums[Math.max(0, j - (i - 1))] + mod) % mod;
    }
    // Update the prefix sums array using the new values from numWays
    for (let j = 1; j <= k + 1; j++) {
      prefixSums[j] = (prefixSums[j - 1] + numWays[j - 1]) % mod;
    }
  }
  // Return the total number of ways to form k inverse pairs with n numbers
  return numWays[k];
}
