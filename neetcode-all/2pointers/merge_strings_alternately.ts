function mergeAlternately(word1: string, word2: string): string {
  let res: string[] = [];
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    res.push(word1[i]);
    res.push(word2[j]);
    i += 1;
    j += 1;
  }
  res.push(word1.slice(i));
  res.push(word2.slice(j));
  return res.join("");
}
