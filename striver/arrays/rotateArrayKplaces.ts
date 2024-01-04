const rotateArrayKPlacesBF = (arr: number[], k: number): number[] => {
  let temp: number[] = [];
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i];
  }
  //put it back
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = temp[i - (arr.length - k)];
  }
  return arr;
};

const rotateArrayKPlacesOptimal = (arr: number[], k: number): number[] => {
  k = k % arr.length;
  let temp: number[] = [];
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i];
  }
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = temp[i - (arr.length - k)];
  }
  return arr;
};
