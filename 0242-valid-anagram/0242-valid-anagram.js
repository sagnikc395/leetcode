/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const sortString = (s) => {
    let chars = s.split('');
    chars.sort((a,b) => a.localeCompare(b));
    return chars.join('');
}

var isAnagram = function(s, t) {
    //sort the string and check if same or not
    if(sortString(s) === sortString(t)) {
        return true;
    }
    return false;
};