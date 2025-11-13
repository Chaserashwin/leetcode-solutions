/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];

    //for finding the starting point
    let l = 0;
    let r = nums.length - 1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] < target) {
            l = mid + 1;
        }
        else if(nums[mid] > target) {
            r = mid - 1;
        }
        else {  //if(nums[mid] === target)
            ans[0] = mid;
            r = mid - 1;
        }
    }

    //for finding the ending point
    l = 0;
    r = nums.length - 1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] > target) {
            r = mid - 1;
        }
        else if(nums[mid] < target) {
            l = mid + 1;
        }
        else {  //if(nums[mid] === target)
            ans[1] = mid;
            l = mid + 1;
        }
    }
    return ans;
};