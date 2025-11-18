/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let ptr1 = 0;
    let ptr2 = 0;
    let slen = s.length;
    let tlen = t.length;
    if(slen === 0 && tlen !== 0) return true;
    while(ptr1 < slen && ptr2 < tlen) {
        if(s[ptr1] === t[ptr2]) {
            ptr1++;
            ptr2++;
        } 
        else{
            ptr2++;
        }
    }
    if(ptr1 === slen) return true;
    return false;
};