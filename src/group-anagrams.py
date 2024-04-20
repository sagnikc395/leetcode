class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        #mapping the character count of each string to the list of anagrams 
        for item in strs:
            count = [0] * 26 # a-z
            # go through each character and map each of them 
            for c in item:
                # get the value using ascii diff and count it up
                count[ord(c) - ord("a")] += 1
            
            # for each count , append the string s 
            # chaning to tuple so it is hashable
            res[tuple(count)].append(item)
        
        return res.values()
        # TC: O(m*n*26) -> m is the length of the array and n is the size of each   

        
