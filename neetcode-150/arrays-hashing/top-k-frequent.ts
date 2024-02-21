// top-k-frequent-elements



function topKFrequent(nums: number[],k: number): number[] {
    //we can take the pairs and sort them in ascending order
    // dont need to sort the entire thing,
    // use a maxheap:
    // the key of the max heap will be the frequency of the item 
    // and do heapify in O(n)
    // each pop will take O(logn)


    //optimal solution:O(n) and O(n)memory -> using bucket sort 
    // here think of the bucket sort as :
    // this algorithm will be linear time if our value would be bounded.
    // here it is unbounded.
    // for our array we are doing the bucket sort we can do another tricky way we can do
    // for index we actually mapping the count of each value and for value we would have a count of what exact value 
    //maps to the count.
    //after the insertion , start at the end -> indices stop at 6 , our input array is size 6 , if all the values were exactly same, 
    // then the max number of value it can be bounded is the most unique elements.
    // we can scan through the entire thing through O(n) time.
    // the max size this new array can be is the size of the new array.
    const hash:{[key:number]: number} = {};

    const freq : number[][] = Array.apply(null,Array(nums.length+1)).map(() => []);

    nums.forEach((item) => {
        if(hash[item]){
            hash[item]++;
        } else {
            hash[item] = 1;
        }
    });

    Object.keys(hash).forEach((item) => {
        const key = Number(item);
        const value = hash[item];
        freq[value].push(key);
    });

    const res: number[] = [];

    for(let i=freq.length-1;i>=0;i--){
        const element = freq[i];
        for(let j=0;j<element.length;j++){
            const second = element[j];
            res.push(Number(second));
            if(res.length === k) {
                return res;
            }
        }
    }
    return [];

}