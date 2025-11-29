/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let i = j = 0;
    let currWS = 0;
    let maxWS = 0;

    while(i <= j && j < s.length) {
        //if character is already exists in the map
        if(map[s[j]] !== undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
            map[s[j]] = j;
        }
        //if character is not in the map
        else{
            map[s[j]] = j;
            currWS = j-i+1;
        }
        j++;
        maxWS = Math.max(currWS, maxWS);
    }
    return maxWS;
};