class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        // first step is to transpose
        transpose(matrix, n);
        // second step is to reverse the rows
        reverse(matrix, n);
    }
    public void transpose(int[][] matrix, int n) {
        for(int i=0; i<n-1; i++) {
            for(int j=i+1; j<n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    public void reverse(int[][] matrix, int n) {
        for(int i=0; i<n; i++) {
            int left = 0, right = n-1;
            while(left <= right) {
                int temp = matrix[i][left];
                matrix[i][left] = matrix[i][right];
                matrix[i][right] = temp;
                left++; right--;
            }
        }
    }
}
