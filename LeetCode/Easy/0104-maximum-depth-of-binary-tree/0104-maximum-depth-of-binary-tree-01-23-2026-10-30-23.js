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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let maxlevel = 0;
    let traverse = (curr, level) => {
        if(!curr.left && !curr.right) {
            maxlevel = Math.max(maxlevel, level);
        }
        curr.left && traverse(curr.left, level+1);
        curr.right && traverse(curr.right, level+1);
    }
    traverse(root, 1);
    return maxlevel;
};