/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
     // false
*/

var isBalanced = function (str) {
    //declare an object of parenthesis
    var parenth = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    var queue = [];
    // iterate over string
    for (var i = 0; i < str.length; i++) {
        // check if we have open parenthesis
        switch (str[i]) {
            case '{':
                queue.push('{');
                break;

            case '(':
                queue.push('(');
                break;

            case '[':
                queue.push('[');
                break;
        }
        //poping last element to check 
    }
    while (queue) {

    }
    if (parenth[queue.pop] !== str[i]) {
        return false;
    }
    return !queue.length;
}

}

  // // found closing , decrease 1 ; 
        // switch (str[i]) {
        //     case '}':
        //         parenth['{']--;
        //         break;

        //     case ')':
        //         parenth['(']--;
        //         break;

        //     case ']':
        //         parenth['[']--;
        //         break;
        // }