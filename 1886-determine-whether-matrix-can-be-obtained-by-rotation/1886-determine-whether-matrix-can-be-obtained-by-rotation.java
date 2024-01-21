class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {
        int n = mat.length;
        int a = 0, b = 0, c = 0, d = 0;
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                if(target[i][j] == mat[j][n-1-i]) a++;
                if(target[i][j] == mat[n-1-i][n-1-j]) b++;
                if(target[i][j] == mat[n-1-j][i]) c++;
                if(target[i][j] == mat[i][j]) d++;
            }
        }
        if(a==n*n || b==n*n || c==n*n || d==n*n) return true;
        else return false;
    }
}