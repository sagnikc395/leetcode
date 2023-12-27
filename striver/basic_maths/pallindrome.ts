function checkPallindrome(n: number): boolean {
  let p = n;
  let q = n;
  let rev = 0;
  while(q>0){
    let r = q%10;
    rev = rev*10+r;
    q = parseInt(q/10);
  }
  if(rev===p){
    return true;
  }
  return false;
}

console.log(checkPallindrome(7789));
console.log(checkPallindrome(121));
