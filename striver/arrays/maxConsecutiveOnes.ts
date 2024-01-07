const maxConsecutiveOnes = (arr: number[]): number => {
  let curr = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      curr += 1;
      count = Math.max(count, curr);
    } else if (arr[i] !== 1) {
      curr = 0;
    }
  }

  return count;
};
