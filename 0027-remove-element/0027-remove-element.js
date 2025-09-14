/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // pointer x will keep the position to be shifted
    let x = 0;
    // pointer i will be used to check which element to shift
    for(let i=0; i<nums.length; i++) {
        if(nums[i] != val) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};
