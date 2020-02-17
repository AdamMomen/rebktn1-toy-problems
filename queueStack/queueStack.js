/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function () {
  var storage = [];

  this.push = function (val) {
    storage.push(val)
  };

  this.pop = function () {
    storage.pop();
  };

  this.size = function () {
    return storage.length
  };

  this.reverse = function () {
    return storage = storage.reverse()
  }

  this.storage = function () {
    return storage
  }
};

var Queue = function () {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function (val) {
    inbox.push(val)
    outbox.push(val)
    return outbox.reverse()
  };

  this.dequeue = function () {
    this.outbox.pop()
  };

  this.size = function () {
    return this.outbox.size();
  };
  this.container = function () {
    return outbox.storage()
  }
};

var x = new Queue()
x.enqueue(1)
x.enqueue(2)
x.enqueue(3)
x.dequeue()
console.log(x.container())

// console.log(x.size())
// console.log(x.dequeue())
// console.log(x.storage())