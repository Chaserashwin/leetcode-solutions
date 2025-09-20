/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length;
    let count;
    while(low <= high) {
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target) {
            return mid;
        }
        else if(nums[mid] < target) {
            low = mid + 1;
            count = low;
        }
        else{
            high = mid - 1;
            count = high + 1;
        }
    }
    return count;
};