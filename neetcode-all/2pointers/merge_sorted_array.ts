function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n -= 1;
    }
  }
  if (n > 0) {
    nums1.splice(0, n, ...nums2.slice(0, n));
  }
}
