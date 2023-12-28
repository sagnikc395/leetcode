function printName5Times(counter: number,name: string): void {
	if(counter===0){
		return;
	}
	console.log(`Name : ${name}` );
	printName5Times(counter-1,name);``
}
printName5Times(5,'Sagnik');