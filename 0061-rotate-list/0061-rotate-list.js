/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //corner case
    if(!head || !head.next) return head;

    //finding the length 
    let length = 0;
    let curr = head;
    while(curr) {
        length++;
        curr = curr.next;
    }

    //to avoid unnecessary rotations
    k = k % length;

    let f = s = head;

    //move f pointer k steps ahead
    for(let i=0; i<k; i++) {
        f = f.next;
    }

    //reaching the end of list
    while(f.next) {
        s = s.next;
        f = f.next;
    }

    //Joining the nodes to their positions
    f.next = head;
    let newHead = s.next;
    s.next = null;

    return newHead;
};