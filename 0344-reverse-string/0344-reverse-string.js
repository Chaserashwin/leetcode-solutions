/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// function to swap
function swap(x, y, arr) {
    let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
 }
var reverseString = function(s) {
    const n = s.length;
    for(let i=0; i<n/2; i++) {
        swap(i, n-1-i, s);
    }
    return s;
};