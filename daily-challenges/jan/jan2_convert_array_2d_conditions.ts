function findMatrix(nums: number[]): number[][] {
    //hashmap in ts 
    const count : {[key: number]: number} = {};
    const res : number[][] = [];

    for(const n of nums){
        const row = count[n] || 0 ;
        if(res.length === row){
            res.push([]);
        }
        res[row].push(n);
        // update the hashmap like this
        count[n] = (count[n] || 0 )+1;
    }
    return res;
};