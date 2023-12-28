function bruteForceGCD2(n1: number,n2: number): number {
	let gcd = 1;
	for(let i=Math.min(n1,n2);i>=1;i--){
		if(n1%i === 0 && n2%i=== 0){
			gcd = i;
			break;
		}
	}
	return gcd;
}

console.log(bruteForceGCD2(11,13));
console.log(bruteForceGCD2(20,40));