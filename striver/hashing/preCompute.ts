//TODO: need to do bug fix on this , getting errors q
function preComputeNumberCount(arr: number[], queries: number[]): void {
  let count: number = 0;
  // for simplicity taking the hash till 13
  //TODO optimize this and use ArrayBuffer to restrict the size.
  let hash : number[]= [];
  console.log(hash);

  //precompute the hash array
  for (let i = 0; i < arr.length; i++) {
    //increase item count in that by 1
    hash[arr[i]] += 1;
  }

  //now the number of times it appears
  queries.forEach((num) => {
    console.log(hash[num]);
  });
}

preComputeNumberCount([1, 3, 2, 1, 3], [1, 4, 2, 3, 12]);
