/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let start = 0;
    let end = s.length-1;
    while(start <= end) {
        if(s[start] === s[end]) {
            ++start; --end;
        }
        else if(!s[start].match(/[a-z0-9]/i)) ++start;
        else if(!s[end].match(/[a-z0-9]/i)) --end;
        else {
            console.log(s[start] + " " + s[end]);
            return false;
        }
    }
    return true;
};