/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// Brute Force solution O(2n^3) time complexity
var rockPaperScissors = function (numberOfSeq) {
    var solution = [];
    var str = '';
    let plays = {
        0: 'R',
        1: 'P',
        2: 'S',
    }
    //O(n^3)
    while (solution.length < Math.pow(numberOfSeq, 3)) {
        for (var i = 0; i < 3; i++) {
            var random = getRandomInt(3)
            str += plays[random]
        }
        //O(n)
        if (!solution.includes(str)) {
            solution.push(str)
        }
        str = '';
    }
    return solution;
};

// random number genrator between 0 and max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
