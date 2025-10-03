/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length-1;
    //trim all the spaces at the end
    while(n>=0) {
        if(s[n] != " ") {
            break;
        }
        --n;
    }
    //n is the point where my last word starts
    //count the character till you reach a space
    let count = 0;
    while(n>=0) {
        if(s[n]===" ") break;
        --n;
        ++count;
    }
    return count;
};