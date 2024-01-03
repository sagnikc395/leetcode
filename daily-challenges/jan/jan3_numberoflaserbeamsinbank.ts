function numberOfBeams(bank: string[]): number {
  //first row count the number of loops
  let prev = bank[0].split("").filter((x) => x === "1").length;
  let res = 0;

  for (let i = 1; i < bank.length; i++) {
    let curr = bank[i].split("").filter((x) => x === "1").length;
    if (curr) {
      res += prev * curr;
      prev = curr;
    }
  }
  return res;
}
