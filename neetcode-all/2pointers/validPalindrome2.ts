function palindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] != s[r]) return false;
    l += 1;
    r -= 1;
  }
  return true;
}

function validPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      let skipL = s.slice(l + 1, r + 1);
      let skipR = s.slice(l, r);

      return palindrome(skipL) || palindrome(skipR);
    }
    l += 1;
    r -= 1;
  }
  return true;
}
