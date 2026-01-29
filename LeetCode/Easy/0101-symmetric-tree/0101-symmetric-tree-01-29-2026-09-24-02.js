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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let q = [root.left, root.right];
    while(q.length) {
        let p1 = q.shift();
        let p2 = q.shift();
        if(!p1 && !p2) continue;  //--> for null node
        if(!p1 || !p2) return false; //--> if node is not present for comparision
        if(p1.val !== p2.val) return false; //--> if tree is asymmetic
        q.push(p1.left, p2.right);
        q.push(p1.right,p2.left);
    }
    return true;
};