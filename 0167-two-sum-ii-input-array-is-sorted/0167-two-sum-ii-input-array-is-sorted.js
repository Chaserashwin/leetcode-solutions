/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let n = nums.length;
    let map = {};

    //creating a map 
    for(let i=0; i<n; i++) {
        map[nums[i]] = i+1;
    }

    //checking if its complement exists
    for(let i=0; i<n; i++) {
        let pairToFind = target - nums[i];
        if(map[pairToFind]) {
            return [i+1, map[pairToFind]];
        }
    }
};