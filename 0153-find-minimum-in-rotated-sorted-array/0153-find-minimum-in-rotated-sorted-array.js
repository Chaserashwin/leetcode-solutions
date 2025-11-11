/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while(l <= r) {
        //if searching space is sorted
        if(nums[l] <= nums[r]) {
            return nums[l];
        }

        let mid = l + Math.floor((r-l)/2);
        //inflection point
        if(nums[mid] < nums[mid-1]) {
            return nums[mid];
        }
        //If left half is not sorted part
        if(nums[l] > nums[mid]) {
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
};