const factorialParam = (n: number,prod: number):number => {
	if(n===0){
		return prod;
	}
	return factorialParam(n-1,prod*n);
}

console.log(factorialParam(5,1));