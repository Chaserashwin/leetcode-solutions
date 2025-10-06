/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let totalcount = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'R') ++count;
        else --count;
        if(count == 0) ++totalcount;
    }
    return totalcount;
};