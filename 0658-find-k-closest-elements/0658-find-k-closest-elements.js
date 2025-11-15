/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        let m = l + Math.floor((r-l)/2);
        //shfting sliding window to right
        if((arr[m+k]-x) < (x-arr[m])) {
            l = m + 1;
        }
        //shfting sliding window to left
        else {
            r = m;
        }
    }


    return arr.slice(l, l+k);
};