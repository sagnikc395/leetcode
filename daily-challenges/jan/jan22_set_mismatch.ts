function findErrorNums(nums: number[]): number[] {
    let res = [0,0];
    for(let n of nums){
        n = Math.abs(n);
        nums[n-1] = -1 *nums[n-1];
        if(nums[n-1]>0){
            res[0] = n;
        }
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0 && i+1 != res[0]){
            res[1] = i+1;
            return res;
        }
    }
};