/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let ans = [];
    while(q.length) {
        let levelarr = [];
        let levelsize = q.length;
        for(let i=0; i<levelsize; i++) {
            let curr = q.shift();
            levelarr.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelarr);
    }
    return ans;
};