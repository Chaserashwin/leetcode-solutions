/*Solving this problem using Hare and tourtoise method
    moving the pointers at indices
    slow by one
    fast by two 
*/    
class Solution {
    public int findDuplicate(int[] nums) {
        // initialise the pointers at starting position
        int slow = nums[0];
        int fast = nums[0];
        // move the pointers first step
        slow = nums[slow];
        fast = nums[nums[fast]];
        // starting the loop till we find any cycle or when both the pointers collides
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        // break when we detect the cycle
        slow = nums[0];
        while(slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow; // we can return any pointer it can be fast also
    }
}