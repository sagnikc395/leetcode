function sumFirstNPamaterized(n: number,sum : number): number {
	if(n<1){
		return sum;
	}	
	return sumFirstNPamaterized(n-1,sum+n);
}

console.log(sumFirstNPamaterized(10,0));