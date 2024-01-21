class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {
        int n = mat.length;
        boolean a = true, b = true, c = true, d = true;
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                if(target[i][j] != mat[j][n-1-i]) a = false;
                if(target[i][j] != mat[n-1-i][n-1-j]) b = false;
                if(target[i][j] != mat[n-1-j][i]) c = false;
                if(target[i][j] != mat[i][j]) d = false;
            }
        }
        if(a || b || c || d) return true;
        return false;
    }
}