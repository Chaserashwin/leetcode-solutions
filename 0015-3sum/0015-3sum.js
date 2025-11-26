/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //sort the array
    nums.sort((a,b)=> a-b);
    let ans = [];
    for(let i=0; i<nums.length; i++) {
        if(nums[i] != nums[i-1]) {
            twoSum(nums, i, ans);
        }
    }
    return ans;
};

var twoSum = function(nums, x, ans) {
    let l = x+1;
    let r = nums.length - 1;

    while(l < r) {
        let sum = nums[l] + nums[r] + nums[x];
        if(sum > 0) --r; 
        else if(sum < 0) ++l;
        else {
            ans.push([nums[l], nums[r], nums[x]]);
            ++l; --r;
            while(l<r && nums[l] == nums[l-1]) ++l;
        }
    }
}
