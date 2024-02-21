//https://stackoverflow.com/questions/31949524/bitwise-and-for-range-of-numbers
function rangeBitwiseAnd(left: number, right: number): number {
    let s = 0;1
    while(left != right ){
        left = left>>1;
         right = right>>1;
        s++;
    }
    return(left<<s);
 };