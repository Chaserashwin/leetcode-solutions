/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const map = {
        "+" : (a,b) => (b+a),
        "-" : (a,b) => (b-a),
        "*" : (a,b) => (b*a),
        "/" : (a,b) => Math.trunc(b/a),
    }
    for(let i=0; i<tokens.length; i++) {
        //when we get any operator
        if(map[tokens[i]]) {
            let a = stack.pop();
            let b = stack.pop();
            let ans = map[tokens[i]](Number(a), Number(b));
            stack.push(ans);
        }
        else{
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};