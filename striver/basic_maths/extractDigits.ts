function extractDigits(n: number): number[] {
  let arr: number[] = [];
  while(n>0){
    let temp = n %10;
    arr.push(temp);
    n=parseInt(n/10);
  }
  return arr;
}

const countExtract = (n: number) =>  Math.floor(Math.log10(n))+1;


console.log(extractDigits(7789));
console.log(countExtract(7789));
