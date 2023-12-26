function groupAnagrams(strs: string[]) : string[][] {
  const wordsMap = strs.reduce((map,str) => {
    const sortedStrs = [...str].sort().join(' ');
    map[sortedStrs] = (map[sortedStrs] || []).concat(str);
    return map;
  },{});

  return Object.values(wordsMap);
}
