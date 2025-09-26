/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // finding the middle node
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow;
    // reverse the second half of linked list
    let prev = null;
    let curr = mid;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let end = prev;
    // checking the palindrome
    let start = head;
    while(end) { 
        if(start.val != end.val) return false;
        else{
            start = start.next;
            end = end.next;
        }
    }
    return true;
};