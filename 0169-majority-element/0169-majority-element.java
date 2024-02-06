import java.util.*;
class Solution {
    public int majorityElement(int[] nums) {
        int n = nums.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i=0; i<n; i++) {
            // for checking that if the element is there or not if it is there, increase its value otherwise
            int value = map.getOrDefault(nums[i],0);
            map.put(nums[i], value+1);
        }

        // Searching for the value
        for(Map.Entry<Integer,Integer> it : map.entrySet()) {
            if(it.getValue() > (n/2)) {
                return it.getKey();
            }
        }
        return -1;
    }

}

// The getOrDefault(Object key, V defaultValue) method of Map interface, implemented by HashMap class is used to get the value mapped with specified key. If no value is mapped with the provided key then the default value is returned.