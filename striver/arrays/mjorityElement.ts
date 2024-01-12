const majorityElementHashMap = (arr: number[]) => {
  let map = new Map<number, number>();
  for (const number of arr) {
    if (map.has(number)) {
      // If yes, increment the count
      map.set(number, map.get(number)! + 1);
    } else {
      // If no, add the number to the map with count 1
      map.set(number, 1);
    }
  }
  for (let [key, val] of map) {
    if (val > arr.length / 2) {
      return key;
    }
  }
  return -1;
};

const majorityElementMoores = (arr: number[]): number => {
  let cnt = 0;
  let el;
  for (let i = 0; i < arr.length; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = arr[i];
    } else if (arr[i] === el) {
      cnt++;
    } else {
      cnt--;
    }
  }
  let cnt1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      cnt += 1;
    }
  }
  if (cnt1 > arr.length / 2) {
    return el;
  }
  return -1;
};
