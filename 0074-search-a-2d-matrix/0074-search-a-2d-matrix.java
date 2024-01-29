/*
--> Brute Force: is to iterate full 2d matrix and search for the target element .
    TC = O(m*n)
    SC = O(1)

--> Better Solution: As all the rows are already sorted we can find the target element by looking for only the starting element and end element of row and if it is found in any row then apply binary search on it
    TC = O(n)+O(logm)
    SC = O(1)

--> Optimal solution: We just assume in our mind that it is not a 2d matrix but it is a 1d array of length m*n
we just apply binary search then to find the targetted element 


*/

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int n = matrix.length;
        int m = matrix[0].length;
        int low = 0, high = (m*n)-1;
        for(int i=0; i<n; i++) {
            while(low <= high) {
                int mid = (low + high)/2;
                // for marking mid element in 2d array
                int row = mid / m;
                int col = mid % m;
                if(matrix[row][col] == target) return true;
                else if(matrix[row][col] < target) low = mid+1;
                else high = mid-1;
            }
        }
        return false;
    }
}