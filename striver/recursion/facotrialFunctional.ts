const factorialFunctional = (n: number)
:number => {
	if(n===0){
		return 1;
	}
	return factorialFunctional(n-1)*n
;}

console.log(factorialFunctional(6));