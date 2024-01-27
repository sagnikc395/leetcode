function myPow(x: number, n: number): number {
  // TLE for time exceeded.
  let result: number = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      result = result * x;
    }
  } else {
    n = Math.abs(n);
    for (let i = 1; i <= n; i++) {
      result = result * x;
    }
    result = 1 / result;
  }
  return result;
}

function myPoSoln(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -1 * n);
  }
  if (n & 1) {
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, Math.floor(n / 2));
}
