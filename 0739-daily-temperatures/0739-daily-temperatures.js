/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let n = temp.length;
    let stack = [];
    let ans = [];
    //initialising the ans with last element as 0, also put it in stack
    stack.push(n-1);
    ans[n-1] = 0;

    for(let i=n-2; i>=0; i--) {
        while(stack.length) {
            let top = stack[stack.length-1];
            if(temp[i] >= temp[top]) {
                stack.pop();
            } 
            else{
                ans[i] = top-i;
                break;
            }
        }
        if(!stack.length) {
            ans[i] = 0;
        }
        stack.push(i);
    }
    return ans;
};