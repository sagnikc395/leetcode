function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    if (s[start] !== s[end]) {
      return false;
    } else {
      start += 1;
      end -= 1;
    }
  }
  return true;
}
