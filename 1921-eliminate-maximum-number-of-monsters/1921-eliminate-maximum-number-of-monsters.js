/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const n = dist.length;
    const arrivalTime = new Array(n);
    
    //arrival times calc
    for(let i=0;i<n;i++){
        arrivalTime[i] = Math.floor(dist[i]-1)/speed[i];
    }
    //sorting the arrival times 
    arrivalTime.sort((a,b) => a-b);
    
    //check if weapon can be used before monster arrives 
    for(let i=0;i<n;i++){
        if(i>arrivalTime[i]){
            return i;
        }
    }
    // else all monsters can be eliminated 
    return n;
};