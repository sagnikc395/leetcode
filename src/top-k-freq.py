class Solution:
    def topKFrequent(self, nums, k):
        # basic approach 
        # maintain a dictionary and update the count of each element in the dictionary and get the top k elemenets on it 
        # or better appraoch is to use a heap
        number_map = {}
        for item in nums:
            if item not in number_map:
                number_map[item] = 1
            number_map[item] += 1
        
        ## sort the dictionary by values
        res_keys = sorted(number_map,key=number_map.get,reverse=True)
        sorted_res=list(res_keys)
        return sorted_res[0:2]
                


print(Solution().topKFrequent([1,1,1,2,2,3],2))
print(Solution().topKFrequent([1],1))
