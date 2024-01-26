export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}
