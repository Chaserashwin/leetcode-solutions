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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    //base cases
    if(!root) return false;
    if(!root.left && !root.right) {
        return root.val === targetSum;
    }
    //main logic
    let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum-root.val);
    let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum-root.val);
    return leftSubTreeHasPathSum || rightSubTreeHasPathSum;
};