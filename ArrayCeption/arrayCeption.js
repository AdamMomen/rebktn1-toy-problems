// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array: 
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

//********************
//NAIVE SOLUTION 
//********************

//input array
//output number

// pseudoCode

/////

//recurions approach
//for iteration is the base case stopper
//


function arrayception(arrayOfArrays, depth) {
    //          Eject mechanism
    if (arrayOfArrays[i]) {
        return false;
    }
    for (let i = 0; i < arrayOfArrays.length; i++) {
        return arrayception(arrayOfArrays[i], depth + 1)
    }
    if (!arrayception) {
        return depth;
    }
}
