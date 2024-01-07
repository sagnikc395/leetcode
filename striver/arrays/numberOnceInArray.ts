//find the number that only appears once in the array

const appearsOnce = (arr: number[]): number => {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  return xor;
};
