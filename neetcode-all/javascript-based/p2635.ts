//apply transform over each element in the array.
// given an integer array arr and a mapping function fn , return an new array 
// with an transformation applied to each element of the array 

// returned array should be created such that 
// returnedArray[i] = fn(arr[i],i)

function map(arr: number[], fn: (n: number,i: number) => number): number[] {
    //map is a functional programming pattern in js , no state associated with it 
    // without using map, we can use it via loops.

    // iterating over every value of arr
    const res = [];

    // [] is a object type and in is iterating over object , it will go through every single key and here it is string.
    // here the function is expecting at runtime.

    for(const idx in arr){
        res[idx] = fn(arr[idx],Number(idx));
    } 
    return res;
}