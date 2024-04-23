class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # since sorted , keep 2 pointers one at left and another at right ,
        # start from first and keeping on add , if greater then decreaase from right end 
        # and similarly loop , until we get a match, since it is guranteed to get a match 
        left ,right = 0 ,len(numbers)-1
        while left < right:
            currsum = numbers[left] + numbers[right]
            if currsum == target:
                return [left+1,right+1]
            elif currsum < target:
                left += 1
            else:
                right -= 1
        return []
