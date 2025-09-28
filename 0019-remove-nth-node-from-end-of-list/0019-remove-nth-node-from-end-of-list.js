/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //creating sentinel node
    let sentinel = new ListNode();
    sentinel.next = head;
    //placing ptr1 to the nth place
    let ptr1 = sentinel;
    for(let i=0; i<n; i++) {
        ptr1 = ptr1.next;
    }
    //running both the pointers
    let ptr2 = sentinel;
    while(ptr1.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    ptr2.next = ptr2.next.next;
    return sentinel.next;
};