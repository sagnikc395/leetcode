function characterHashing(word: string, queries: string[]): void {
  //precompute
  let hash: number[] = [];
  for (let i = 0; i < word.length; i++) {
    let idx = word[i].charCodeAt(0) - "a".charCodeAt(0);
    hash[idx] = (hash[idx] || 0) + 1;
  }

  //print in the index
  queries.forEach((item) => {
    let idx: number = item.charCodeAt(0) - "a".charCodeAt(0);
    console.log(hash[idx]);
  });
}

characterHashing("abcdefghab",["a","b","z"])
