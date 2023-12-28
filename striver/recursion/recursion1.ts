let ctr = 0;

function calle() {
	if(ctr===1000){
		return; //bye for now 
	}
	console.log(`Called ${ctr} times`);ctr+=1;
	calle();
}


function main() {
	console.log('lol');
	calle();
}

main();