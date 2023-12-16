class Solution:
    def mergeAlternately(self,word1,word2):
        res = []
        i = 0
        j = 0
        while i < len(word1) and j < len(word2):
            res.append(word1[i])
            res.append(word2[j])
            i += 1
            j += 1

        res.append(word1[i:])
        res.append(word2[j:])
        return ''.join(res)



if __name__ == '__main__':
    word1 = "abc"
    word2 = "pqr"
    print(Solution().mergeAlternately(word1,word2))
    word1 = "ab"
    word2 = "pqrs"
    print(Solution().mergeAlternately(word1,word2))
    word1 = "abcd"
    word2 = "pq"
    print(Solution().mergeAlternately(word1,word2))


