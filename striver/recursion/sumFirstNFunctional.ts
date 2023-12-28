function sumFirstNFunctional(n: number){ 
	if(n === 0){
		return 0;
	}
	return sumFirstNFunctional(n-1)+n;

}

console.log(sumFirstNFunctional(12));