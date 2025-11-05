/**
 * @param {number} x
 * @return {number}
 */


var mySqrt = function(x) {
    if(x < 2) return x;
    
    let l = 2;
    let r = Math.floor(x/2);
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        if(x === mid**2) return mid;
        else if(x < mid**2) {
            r = mid-1;
        }
        else {
            l = mid+1;
        }
    }
    return r;
};