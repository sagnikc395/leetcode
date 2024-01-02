function mapHashing(arr: number[], queries: number[]): void {
  //precompute
  let map: { [key: number]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }

  //fetch
  queries.forEach((item) => {
    console.log(map[item]);
  });
}
