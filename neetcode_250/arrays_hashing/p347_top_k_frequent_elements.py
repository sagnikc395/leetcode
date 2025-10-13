class Solution:
    def topKFrequent(self,nums,k):
        item_count = {}
        for num in nums:
            if num in item_count:
                item_count[num] += 1
            else:
                item_count[num] = 1

        # reverse the dict to sort by top k
        # since sorted will give a view of the dict into a list of tuples 
        sorted_item_count = dict(sorted(item_count.items(),key=lambda x: x[1],reverse=True))

        #get the top k values inside a list
        top_k = []

        for _ , val in sorted_item_count.items():
            if k > 0:
                top_k.append(val)
                k=k-1

        return top_k

if __name__ == '__main__':
    s = Solution().topKFrequent([1,1,1,2,2,3],2)
    print(s)
    
