class Solution {
    public int maxSubArray(int[] nums) {
        int currsum = 0, maxsum = Integer.MIN_VALUE;
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            currsum += nums[i];
            if (currsum > maxsum) maxsum = currsum;
            if (currsum < 0) currsum = 0;
        }
        return maxsum;
    }
}