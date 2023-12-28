function reversePrint(start: number,end: number){
	if(start === end){
		return;
	}
	console.log(end);
	reversePrint(start,end-1);
}

reversePrint(1,11);