function gcdEuclidean(n1: number,n2: number): number {
	if(n1 === 0){
		return n2;
	}
	else if(n2 === 0){
		return n1;
	}
	if(n1>n2) {
		return gcdEuclidean(n1%n2,n2);
	}
	else {
		return gcdEuclidean(n1,n2%n1);
	}
}

console.log(gcdEuclidean(12,23));
console.log(gcdEuclidean(11,55));