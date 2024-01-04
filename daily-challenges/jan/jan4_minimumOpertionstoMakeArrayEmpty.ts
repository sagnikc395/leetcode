function minOperations(nums: number[]): number {
  //taking every number and mapping it to the count of that number
  // 1 -> -1
  // 2 -> 1
  // 3 -> 1
  // fibonacci seq -> 1+ min(count(4-1),count(4-2))
  // overall : - n*0(X) -> get the size of the operation itself
  let count = new Map<number, number>();
  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }
  let res = 0;
  for (let [n, c] of count.entries()) {
    if (c === 1) {
      return -1;
    }
    res += Math.ceil(c / 3);
  }
  return res;
}
