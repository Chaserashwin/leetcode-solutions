/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0;
    let r = nums.length-1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);

        if(nums[mid] === nums[mid-1]) {    //middle pair exist on left
            let leftcount = mid-1-l;
            if(leftcount % 2 === 1) {   //odd
                r = mid - 2;
            }
            else {  //even
                l = mid + 1;
            }
        } 
        else if(nums[mid] === nums[mid+1]){   //middle pair exist on right
            leftcount = mid - l;
            if(leftcount % 2 === 1) {   //odd
                r = mid - 1;
            }
            else{   //even
                l = mid + 2;
            }
        }
        else{   //single element
            return nums[mid];
        }
    }
};