/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let h = height.length;
    //find the maxL array
    let maxL = [];
    maxL[0] = height[0];
    for(let i=1; i<h; i++) {
        maxL[i] = Math.max(maxL[i-1], height[i]);
    }
    //finding the maxR array
    let maxR = [];
    maxR[h-1] = height[h-1];
    for(let i = h-2; i>=0; i--) {
        maxR[i] = Math.max(maxR[i+1], height[i]);
    }
    //calculating the water hold
    let ans = 0;
    for(let i=0; i<h; i++) {
        ans += Math.min(maxL[i], maxR[i]) - height[i];
    }
    return ans;
};