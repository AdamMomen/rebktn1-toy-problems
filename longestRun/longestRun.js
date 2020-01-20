/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/
// i/p => string 
// o/p => array of numbers  > 0


<<<<<<< HEAD
<<<<<<< HEAD
//naive solution 

function longestRun(string) {
    debugger;
    //declare an object
    var charData = {
    }
    //iterate + store in the object
    for (var i = 0; i < string.length; i++) {
        const index = i;
        var element = string[i];
        //next element is the same
        if (element === string[i + 1]) {
            if (!charData[element]) {
                let item = {
                    freq: 1,
                    index: index,
                    previous: [],
                }
                charData[element] = item;
            } else {
                var pushed = charData[element].previous.push(index)
                let item = {
                    index: i,
                    previous: pushed,
                    freq: charData[element].freq + 1,
                };
                charData[element] = item
            }
        }
    }
    //check the largest one
    for (var key in charData) {
        var max = 0;
        if (key.freq > max) {
            max = key.freq
        }
    }
    // return the indecies array
    return max.previous;
}
=======


>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
=======


>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
