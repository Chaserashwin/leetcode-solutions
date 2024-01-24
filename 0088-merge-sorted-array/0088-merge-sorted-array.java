class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int left = 0, right = 0, index=0;
        int[] nums3 = new int[m+n];
        while(left < m && right < n) {
            if(nums1[left] <= nums2[right]) {
                nums3[index] = nums1[left];
                left++; index++;
            }
            else {
                nums3[index] = nums2[right];
                right++; index++;
            }
        }
        //if traversal of arr2 gets completed
        while(left < m) {
            nums3[index++] = nums1[left++];
        }

        //if traversal of arr1 gets completed
        while(right < n) {
            nums3[index++] = nums2[right++];
        }

        //to put back into the initial arrays
        for(int i=0; i<n+m; i++) {
            nums1[i] = nums3[i];
        }
    }
}