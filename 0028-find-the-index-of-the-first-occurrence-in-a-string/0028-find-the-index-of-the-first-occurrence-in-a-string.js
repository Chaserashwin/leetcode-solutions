/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let h = haystack.length;
    let n = needle.length;
    //building lps array
    let lps = [0];
    let i = 0;
    let j = 1;
    while(j<n) {
        if(needle[i] === needle[j]) {
            lps[j] = i+1;
            ++i; ++j;
        }
        else {
            if(i === 0) {
                lps[j] = 0;
                ++j;
            }
            else{
                i = lps[i-1];
            }
        }
    }
    //Check for the string
    i = j = 0;
    while(i<h) {
        if(haystack[i] === needle[j]) {
            ++i; ++j;
        }
        else{
            if(j === 0) {
                ++i;
            }
            else {
                j = lps[j-1];
            }
        }
        if(j == n) {
            return i-n;
        } 
    }
    return -1;
};