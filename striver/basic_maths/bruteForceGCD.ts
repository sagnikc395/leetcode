function bruteForceGCD(n1: number, n2: number): number {
	let gcd =1;
	//default value of gcd 
	for(let i=1;i<=Math.min(n1,n2);i++){
		if(n1%i===0 && n2%i===0){
			gcd = i;
		}
	}
	return gcd;
}

console.log(bruteForceGCD(11,13));
console.log(bruteForceGCD(20,40));