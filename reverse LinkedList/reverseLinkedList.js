<<<<<<< HEAD
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
//Time complexity of Big O(n)
var reverseLinkedList = function(linkedList) {
  //Here there is a bug need to check it out.
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
=======
var Range = function (start, end, step) {

    this.start = start
    if (!end) {
        this.end = start
    } else {
        this.end = end
    }
    if (!step) {
        this.step = (this.start <= this.end) ? 1 : -1
    } else {
        this.step = step
    }
}


Range.prototype.size = function () {
    return Math.floor((this.start - this.end) / this.step) + 1
};

Range.prototype.each = function (callback) {
    for (var x = this.start; this.step > 0 ? x <= this.end; x += this.step) {
        callback(x)
    }
}

Range.prototype.includes = function (val) {
    if (this.step > 0) {
        return (val >= this.start && val <= this.end &&
            (((val - this.start) / step) % 1 === 0))
    } else {
        return (val <= this.start && val >= this.end &&
            (((val - this.start) / step) % 1 === 0))
    }
};
>>>>>>> 94a97edeb556c240b870788df4b3608b75e8bfab
