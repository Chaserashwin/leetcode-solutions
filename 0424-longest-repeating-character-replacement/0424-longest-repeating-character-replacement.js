/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let slen = s.length;
    let map = {};
    map[s[0]] = 1;
    let i = j = 0;
    let maxWindow = 0;

    while(j<slen) {
        if(isWindowValid(map, k)) {
            maxWindow = Math.max(maxWindow, j-i+1);
            ++j;
            map[s[j]] = map[s[j]] ? ++map[s[j]] : 1;
        }
        else {
            --map[s[i]];
            ++i;
        }
    }
    return maxWindow;
};

var isWindowValid = function (map, k) {
    let totalCount = 0;
    let maxCount = 0;
    for(let i=0; i<26; i++) {
        let char = String.fromCharCode(i+65);
        if(map[char]) {
            totalCount += map[char];
            maxCount = Math.max(maxCount, map[char]); 
        }
    }
    return (totalCount - maxCount <= k);
}