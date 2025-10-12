/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={};
//sort the string and use it as key and if it matches then store the value in as it is fashion
    for(let i=0; i<strs.length; i++) {  // n
        let sortedStr = strs[i].split("").sort().join("");  //O(m log m)
        if(!map[sortedStr]) {
            map[sortedStr] = [strs[i]];
        } 
        else{
            map[sortedStr].push(strs[i]);
        }
    }
    // return the values of the map in the array
    return [...Object.values(map)];
};