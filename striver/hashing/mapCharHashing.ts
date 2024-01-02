function mapCharHashing(word: string, queries: string[]): void {
  let mapp: { [key: string]: number } = {};
  for (let i = 0; i < word.length; i++) {
    let idx = word[i].charCodeAt(0) - "a".charCodeAt(0);
    mapp[idx] = (mapp[idx] || 0) + 1;
  }

  queries.forEach((query) => {
    let idx = query.charCodeAt(0) - "a".charCodeAt(0);
    console.log(mapp[idx]);
  });
}

mapCharHashing("abcdefghikjasdijk", ["a", "i", "c"]);
