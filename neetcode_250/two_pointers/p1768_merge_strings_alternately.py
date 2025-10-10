class Solution:
    def mergeAlterately(self,word1: str,word2: str) -> str:
        part1 = 0
        part2 = 0

        result_str = ""
        merge_len = min(len(word1),len(word2))

        for _ in range(merge_len):
            result_str += word1[part1]
            part1+=1
            result_str += word2[part2]
            part2+=1

        if len(word2[part2:]) > 0:
            result_str+= word2[part2:]
        else:
            result_str += word1[part1:]

        return result_str
