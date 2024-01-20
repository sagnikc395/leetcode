function lengthOfLongestSubstring(s: string): number {
    let map = new Map<string , number>();
    let left = 0 , right = 0;
    let n = s.length;
    let len = 0;
    while (right < n) {
        if(map.has(s[right]!)){
            left = Math.max(map.get(s[right])!+1,left);
        }
        map.set(s[right],right);
        len = Math.max(len, right - left + 1);
        right++;
    }
    return len;
};