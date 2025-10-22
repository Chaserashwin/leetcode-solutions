/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
            let second = stack.pop();
            let first = stack.pop();
            let output = eval(`${first} ${tokens[i]} ${second}`);
            stack.push(Math.trunc(output));
        }
        else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};