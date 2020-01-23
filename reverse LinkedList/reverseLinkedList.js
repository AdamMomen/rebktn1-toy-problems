/*
Write a function that reverses a linked list.

Explanation:

Given the below linked list:

	A -> B -> C -> D -> E -> null

Return:

	E -> D -> C -> B -> A -> null

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
// Helpers

function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}


//add a queue
class Stack {
    constructor(){
        this.storage = [];
    }
    push(value){
    this.storage.push(value)
    return this.storage
    }
    pop(){
      var deleted = this.storage[0]
       this.storage.shift()
       return deleted;
    }
    size(){
     return  this.storage.length
    }
}
var reverseLinkedList = function(linkedList) {
  while(linkedList.next !== null){
      reverseStack.push(linkedList.value)
  }
  const linkedSize = reverseStack.size();
  for(let i = 0 ; i< linkedSize; i++ ){
      reverseStack.pop()
  }
};
//Testing
var reverseStack = new Stack()
var head = new Node(1)
var long1 = head.next = new Node(2)
var long2 = long1.next = new Node(4)
reverseLinkedList(head);