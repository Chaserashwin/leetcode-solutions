class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {
        int n = mat.length;
        // declaring every variable with true
        boolean a = true, b = true, c = true, d = true;
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                // for checking 90* match or not
                if(target[i][j] != mat[j][n-1-i]) a = false;
                // for checking 180* match or not
                if(target[i][j] != mat[n-1-i][n-1-j]) b = false;
                // for checking 270* match or not
                if(target[i][j] != mat[n-1-j][i]) c = false;
                // for checking 360*||0* match or not
                if(target[i][j] != mat[i][j]) d = false;
            }
        }
        // to check any of the matrix fully match or not
        if(a || b || c || d) return true;
        return false;
    }
}