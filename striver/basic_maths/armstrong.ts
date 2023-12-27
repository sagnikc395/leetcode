function checkArmstrong(n: number): boolean {
  let p = n;
  let sum = 0 ;
  while(p>0){
    let q = p%10;
    sum += Math.pow(q,3);
    p = parseInt(p/10);
  }
  if(sum===n){
    return true;
  }
  return false;
}

console.log(checkArmstrong(1634));
console.log(checkArmstrong(371));
console.log(checkArmstrong(453));
