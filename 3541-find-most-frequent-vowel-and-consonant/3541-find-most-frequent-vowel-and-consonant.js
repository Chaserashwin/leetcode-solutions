/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    //store all the values with freq in a map
    let map = {};
    for(let i=0; i < s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1;
        }
        else{
            map[s[i]]++;
        }
    }
    //Find the max vowels and consonant inside the map
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    for(let i=0; i < s.length; i++) {
        //vowels
        if(vowels.includes(s[i])) {
            if(map[s[i]] > maxVowel) {
                maxVowel = map[s[i]];
            }
        }
        else{
            if(map[s[i]] > maxConsonant) {
                maxConsonant = map[s[i]];
            }
        }
    }
    return maxVowel + maxConsonant;
};