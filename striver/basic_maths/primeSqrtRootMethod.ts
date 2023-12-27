function primeSquareRootMethod(n: number): boolean {
  // tc: o(sqrt(n))
  
  let cnt = 0;
  for(let i=1;i*i<=n;i++){
    if(n%i===0){
      cnt+=1;
      if(parseInt(n/i) != i){
        cnt+=1;
      }
    }
  }

  if(cnt===2){
    return true;
  }
  return false;
}

console.log(primeSquareRootMethod(123));
console.log(primeSquareRootMethod(11));
