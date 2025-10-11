/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapStoT = {};
    let mapTtoS = {};
    for(let i=0; i<s.length; i++) {
        //push the values to the map if not present
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } 
        //checking if the map already has the value but different
        else if(mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};