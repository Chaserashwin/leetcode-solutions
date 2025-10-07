/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");

    for(let x = 0; x < s.length; x=x+(2*k)) {
        let n = k;
        let mid = Math.floor(n/2);
        for(let i = 0; i < mid; i++) {
            let temp = s[x+i];
            s[x+i] = s[x+n-1-i];
            s[x+n-1-i] = temp;
        }
    }
    return s.join("");
};

//T -> O(n)
//Space -> O(n) = because you are creating an array
//Space -> O(1) = if you are not converting it to array (like in some languages)