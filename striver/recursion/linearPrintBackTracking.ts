function linearPrintBacktracking(i: number, end: number){
	if(i<1){
		return
	}
	linearPrintBacktracking(i-1,end);
	console.log(i);
}

function main() {
	linearPrintBacktracking(10);
}
main();