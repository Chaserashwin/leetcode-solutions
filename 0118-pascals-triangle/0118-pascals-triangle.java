class Solution {
    // function to generate a row
    public List<Integer> generateRow(int row) {
        List<Integer> tempList = new ArrayList<>();
            tempList.add(1);
            int ans = 1;
            for(int i=1; i<row; i++) {
                ans = ans*(row-i);
                ans = ans/i;
                tempList.add(ans);
            }
            return tempList;
    }
    
    // Main function
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ansList = new ArrayList<>();
        for(int row=1; row<=numRows; row++) {
            ansList.add(generateRow(row));
        }
        return ansList;
    }
}
