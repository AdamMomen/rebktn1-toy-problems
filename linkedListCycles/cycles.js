/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// First solution
//pseudocode

var hasCycle = function(linkedList) {
  debugger;
  // pointers
  let p = linkedList;
  let q = linkedList.next.next;
  //traverse
  while (p) {
    if (p == q) {
      return true;
    }
    console.log("p", p, "q", q);
    p = p.next;
    q = q.next;
  }
};
//maybe I need to change the const to var later
const linked = new Node("A");
const cycled = (linked.next = new Node("B"));
linked.next.next = new Node("C");
linked.next.next.next = new Node("D");
const pre_cycled = (linked.next.next.next.next = new Node("E"));
pre_cycled.next = cycled;
hasCycle(linked);
// second solution
//pseudocode
// 0 declare a memo
// need to check if we have
// 1 check if node is visited in memo
// add it
// 2 traverse
// else
//rerurn true
