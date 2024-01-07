//missing number using hash array
//TC: O(N)+O(N)
// SC: O(N)
const missingNumberHashing = (arr: number[]): number => {
  let hash: number[] = new Array();
  hash.fill(0, 0, arr.length);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = 1;
  }
  for (let i = 1; i < arr.length; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }

  return -1;
};

//using sum :
//TC: O(N)
// SC: O(1)

const missingNumberSum = (arr: number[]): number => {
  let arrSum = arr.reduce((curr: number, next: number) => {
    return curr + next;
  }, 0);
  let expectedSum = (arr.length * (arr.length + 1)) / 2;
  return expectedSum - arrSum;
};

//more optimal based using xor

const missingNumberXOR = (arr: number[]): number => {
  //xor of same numbers is always 0
  let xor1: number = 0;
  let xor2: number = 0;
  for (let i = 0; i < arr.length; i++) {
    xor2 = xor2 ^ arr[i];
    xor1 = xor1 ^ (i + 1);
  }
  return xor1 ^ xor2;
};
