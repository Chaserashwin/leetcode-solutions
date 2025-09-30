/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let liststart = newList;
    while(list1 && list2){
        if(list1.val <= list2.val) {
            newList.next = list1;
            list1 = list1.next;
        }
        else{
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }
    if(list1 == null) {
        while(list2) {
            newList.next = list2;
            newList = newList.next;
            list2 = list2.next;
        }
    } else{
        while(list1) {
            newList.next = list1;
            newList = newList.next;
            list1 = list1.next;
        }
    }
    return liststart.next;
};