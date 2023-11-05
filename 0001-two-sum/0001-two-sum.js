/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {        
        map.set(nums[index], index);                        
    }
    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];
        const sumIndex = map.get(complement);

        const isTarget = map.has(complement) && (map.get(complement) !== index)
        if (isTarget) return [ index, sumIndex ];
    }
    return [ -1, -1 ];
};