function getAllDivisors(n: number): number[] {
  let res : number[] = [];
  for(let i=1;i<=n;i++){
    if(n%i===0){
      res.push(i);
    }
  }
  return res;
}

function getAllDivisorsOptimized(n: number): number[] {
  let res :number[] =[];
  for(let i=1;i<Math.sqrt(n);i++){
    if(n%i===0){
      res.push(i);
      res.push(n/i);
    }
  }
  return res;
}

console.log(getAllDivisors(36));
console.log(getAllDivisorsOptimized(36));
