const subArraySumEqualsKBF = (arr: number[], k: number): number => {
  let len: number = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        len = Math.max(len, j - i + 1);
        sum = 0;
      }
    }
  }
  return len;
};

//optimized brute force

const subArraySumEqualsKBFOpt = (arr: number[], k: number): number => {
  let len: number = 0;
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        len = Math.max(len, j - i + 1);
        sum = 0;
      }
    }
  }
  return len;
};

//better ; using a hashmap

const subArraySumEqualsHashMap = (arr: number[], k: number): number => {
  let preSumMap = new Map<number, number>();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    //look for remaining
    let rem = sum - k;
    if (preSumMap.get(rem)) {
      // weird ts bug : https://stackoverflow.com/questions/70723319/object-is-possibly-undefined-using-es6-map-get-right-after-map-set
      let len = i - preSumMap.get(rem)!;
      maxLen = Math.max(len, maxLen);
    }
    //edge case check for 0 also !
    if (preSumMap.get(sum) === undefined) {
      //update value
      preSumMap.set(sum, i);
    }
  }
  return maxLen;
};

console.log(subArraySumEqualsKBF([1, 1, 1, 3], 3));
