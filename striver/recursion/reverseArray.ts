
// //cant pass pointers in js/ts 
// let arr = [1,2,3,4,5,6,7,8];

// function reverseArray(left: number,right: number) {
// 	//reversess inplace 
// 	if(left>=right){
// 		return ;
// 	}
// 	let temp = arr[left];
// 	arr[left] = arr[right];
// 	arr[right] = temp;
// 	reverseArray(arr,left+1,right-1);
// }



// console.log(reverseArray(0,arr.length-1));

function reverseArray(arr: number[]) : number[] {
	if(!arr.length) return arr;
	return reverseArray(arr.slice(1)).concat(arr[0]);
}
console.log(reverseArray([1,2,3,4,4,5,6,6,76]));