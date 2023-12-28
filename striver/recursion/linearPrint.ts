function linearPrint(start: number,end: number): void {
	if(start===end){
		return ;
	}
	console.log(start);
	linearPrint(start+1,end);
}

linearPrint(1,10)