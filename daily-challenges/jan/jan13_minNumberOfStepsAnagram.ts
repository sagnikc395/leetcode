function minSteps(s: string, t: string): number {
  const cnt = new Array(26).fill(0);
  for (const c of s) {
    const i = c.charCodeAt(0) - "a".charCodeAt(0);
    ++cnt[i];
  }
  let ans = 0;
  for (const c of t) {
    const i = c.charCodeAt(0) - "a".charCodeAt(0);
    if (--cnt[i] < 0) {
      ans += 1;
    }
  }
  return ans;
}
