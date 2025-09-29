/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    while(l1 || l2 || carry) {
        //declaring the variables and storing the values in it
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        // intializing the new LL and attaching digit nodes to it
        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;
        // moving through the list
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return ansHead.next;
};