/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node 
 * at which the intersection of two linked lists begins, 
 * or null if there is no such intersection.
 * 
 * Example:
 * 
 * Given the following two linked lists list1 and list2, 
 * linkedListIntersection(list1,list2) should return D 
 * as the node of intersection.
 * 
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 * 
 * Given the following two linked lists list1 and list2, 
 * linkedListIntersection(list1,list2) should return NULL 
 * as there is no point of intersection.
 * 
 *    A → B → C → D
 *    X → Y → Z
 * 
 */

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  debugger;
  let p;
  let q;
  while (list1 && list2) {
    if (p === q) {
      return p;
    }
    p = linkedListIntersection(list1.value, null)
    q = linkedListIntersection(null, list2.value)
  }

  return list1 && list1.value;
  return list2 && list2.value;
}
const head = new Node(1)
const long1 = head.next = new Node(2)
const long2 = long1.next = new Node(4)
//================================
const head1 = new Node(1)
const long3 = head1.next = new Node(2)
const long4 = long3.next = new Node(4)
linkedListIntersection(head, head1);