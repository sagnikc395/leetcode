function reversePrintBacktrack(n:number,i:number){
	if(i>n){
		return;
	}
	reversePrintBacktrack(n,i+1);
	console.log(i);
}

function main(){
	reversePrintBacktrack(10,1);
}

main();