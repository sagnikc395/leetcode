function bruteForceHashing(num: number,arr: number[]): number {
	let count: number = 0;
	arr.forEach((item) => {
		if(item === num){
			count+=1;
		}
	});
	return count;
}

console.log(bruteForceHashing(4,[1,2,3,4]));
console.log(bruteForceHashing(3,[1,2,3,3,3]));