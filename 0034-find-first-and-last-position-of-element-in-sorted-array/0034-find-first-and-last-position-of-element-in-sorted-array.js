/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    //for finding the starting point
    let l = 0;
    let r = nums.length-1;
    while(l < r) {
        let mid = l + Math.floor((r-l)/2); //round down
        if(target > nums[mid]) l = mid + 1;    
        else r = mid;
    }
    if(nums[l] === target) ans[0] = l;

    //for finding the ending point
    l = 0;
    r = nums.length - 1;
    while(l < r) {
        let mid = l + Math.ceil((r-l)/2);  //round up
        if(nums[mid] > target) r = mid - 1;
        else l = mid;
    }
    if(nums[l] === target) ans[1] = l;

    return ans;
};