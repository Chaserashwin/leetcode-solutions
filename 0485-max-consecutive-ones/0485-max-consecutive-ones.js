/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currCount = 0;
    let maxCount = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == 0) {
            currCount = 0;
        }
        else{
            currCount++;
        }
        if(currCount > maxCount) {
            maxCount = currCount;
        }
    }
    return maxCount;
};