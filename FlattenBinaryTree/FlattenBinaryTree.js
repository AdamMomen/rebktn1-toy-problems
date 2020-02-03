// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// input Node
// output linkedlist
// constraints none
// edge cases none

var flatten = function(root) {
  var p;
  let i = 0;
  debugger;
  var linkedlist;
  //naive solution
  function traverse(node, array = []) {
    if (!node.left && !node.right) {
      array.push(node.val);
    } else {
      array.push(node.val);
      if (node.left) {
        array = traverse(node.left, array);
      }
      if (node.right) {
        array = traverse(node.right, array);
      }
    }
    return array;
  }
  const linked = traverse(root);
  console.log(linked);
  // iterate over an array push the values there
  while (i < linked.length) {
    if (i === 0) {
      p = linkedlist = new Node(linked[i]);
    }
    p = p.next = new Node(linked[i]);
    //linkedlist = linkedlist.next = new Node(linked[i]);
    i++;
  }
  console.log(linkedlist);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function Node(val) {
  this.next = null;
  this.val = val;
}
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);
flatten(root);
