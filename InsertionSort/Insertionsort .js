// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
//3- It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//naive solution over arrays
var insertionSortList = function (head) {

};

insertionSortArray = function (array) {
    var sortedArr = [];
    var unsortedArr = array.slice()
    for (let i = 0; i < array.length; i++) {
        var removed = unsortedArr.shift();
        if (removed < sortedArr[sortedArr.length - 1]) {
            sortedArr.indexOf(removed) >= 0 ?
                sortedArr.unshift(removed) : ''
        } else {
            sortedArr.push(removed);
        }
    }
    return sortedArr;
}