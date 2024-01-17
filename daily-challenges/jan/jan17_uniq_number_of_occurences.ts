const checkDuplicates = (map: Map<number, number>): boolean => {
  let valuesSet = new Set();
  for (const [key, value] of map.entries()) {
    if (valuesSet.has(value)) {
      //duplicates present
      return true;
    }
    valuesSet.add(value);
  }
  //no duplicates
  return false;
};

function uniqueOccurrences(arr: number[]): boolean {
  //using a hashmap based solution
  let map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      //check if present , then increase the count
      let count = map.get(arr[i])!;
      map.set(arr[i], count + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  console.log(map);
  if (checkDuplicates(map)) {
    return false;
  }
  return true;
}

uniqueOccurrences([1, 2, 2, 1, 1, 3]);
