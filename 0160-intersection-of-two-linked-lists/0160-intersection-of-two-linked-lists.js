/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //finding the length of A
    let a = 0;
    let pA = headA;
    while(pA) {
        ++a;
        pA = pA.next;
    }

    //finding the length of B
    let b = 0;
    let pB = headB;
    while(pB) {
        ++b;
        pB = pB.next;
    }

    let diff = Math.abs(a-b);

    //I want the first list as small & second as large
    //Interchanging the lists if this opposite is true
    if(a > b) {
        let temp = headA;
        headA = headB;
        headB = temp;
    } 

    //moving the pB to the diff
    for(let i=0; i<diff; i++) {
        headB = headB.next;
    }

    pA = headA;
    pB = headB;

    //moving both list pointers together until they reach to the same point
    while(pA != pB) {
        pA = pA.next;
        pB = pB.next;
    }
    return pA;

 };