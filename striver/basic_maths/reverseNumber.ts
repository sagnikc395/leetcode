function reverseNumber(n: number): number {
  let rev: number = 0;
  while(n>0){
    let last = n%10;
    rev = (rev*10)+last;
    n=parseInt(n/10);
  }
  return rev;
}

console.log(reverseNumber(7789));
