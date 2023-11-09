/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const mod = 1e9+7;
    let ans = 0;
    let count = 0;
    let currentChar = '@';
    
    for(const c of s){
        if(c===currentChar) {
            count = count + 1;
        }
        else {
            count = 1;
        }
        currentChar = c;
        ans += count;
        ans = ans % mod;
    }
    return ans;
};