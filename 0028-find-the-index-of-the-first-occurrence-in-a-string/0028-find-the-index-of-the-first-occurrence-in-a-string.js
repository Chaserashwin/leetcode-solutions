/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let h = haystack.length;
    let n = needle.length;
    //going through each element in the haystack
    for(let i=0; i<=h-n; i++) {
        let j=0;
        //checking through the sliding window matches with needle or not
        for(j=0; j<n; j++) {
            if(needle[j] !== haystack[i+j]) {
                break;
            }
        }
        //fully matching with the needle
        if(j === n) return i;
    }
    return -1;
};