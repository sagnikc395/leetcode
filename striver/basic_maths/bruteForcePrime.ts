function bruteForcePrime(n: number): boolean {
  let cnt = 0;
  for(let i=1;i<=n;i++){
    if(n%i===0){
      cnt+=1;
    }
  }
  if(cnt===2){
    return true;
  }
  return false;
}



console.log(bruteForcePrime(11));
console.log(bruteForcePrime(123));
console.log(bruteForcePrime(121));
