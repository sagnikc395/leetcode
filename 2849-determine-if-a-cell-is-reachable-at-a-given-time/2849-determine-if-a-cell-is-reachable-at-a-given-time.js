/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
   if(fx==sx && fy==sy){
       return t !== 1;
   } 
    const dx = Math.abs(sx-fx);
    const dy = Math.abs(sy-fy);
    return Math.max(dx,dy) <= t;
    
};