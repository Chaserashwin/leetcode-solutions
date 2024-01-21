class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {
        int n = mat.length;
        boolean a = false, b = false, c = false, d = false;
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                if(target[i][j] == mat[j][n-1-i]) a = true;
                if(target[i][j] == mat[n-1-i][n-1-j]) b = true;
                if(target[i][j] == mat[n-1-j][i]) c = true;
                if(target[i][j] == mat[i][j]) d = true;
            }
        }
        if(a || b || c || d) return true;
        else return false;
    }
}