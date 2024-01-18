class Solution {
    public void nextPermutation(int[] nums) {
        // List<Integer> list = Arrays.asList(nums);
        int idx1 = -1;
        int idx2 = -1;
        int n = nums.length;
        // finding the breaking point
        for(int i=n-2; i>=0; i--) {
            if(nums[i] < nums[i+1]) {
                idx1 = i;
                break;
            }
        }
        // if there is no breaking point
        if(idx1 == -1) {
            reverse(nums, 0);
        }

        // if we got any breakpoint then we need to store that in idx2 and later swap that with idx1 
        else {
            for(int i=n-1; i>=0; i--) {
                if(nums[i] > nums[idx1]) {
                    idx2 = i;
                    break;
                }
            }
            
            swap(nums, idx1, idx2);
            // reverse the rest 
            reverse(nums, idx1+1);
        }
    }

    void swap(int[] nums, int x, int y) {
        int temp = nums[x];
        nums[x] = nums[y];
        nums[y] = temp;
    }

    void reverse(int[] nums, int start) {
        int x = start;
        int y = nums.length-1;
        while(x < y) {
            swap(nums, x, y);
            x++; y--;
        }
    }
}
