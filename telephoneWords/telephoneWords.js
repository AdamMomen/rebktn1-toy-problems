/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
  var charObject = {
    2: {
      a: "a",
      b: "b",
      c: "c"
    },
    3: {
      d: "d",
      e: "e",
      f: "f"
    },
    4: {
      g: "g",
      h: "h",
      i: "i"
    },
    5: {
      j: "j",
      k: "k",
      l: "l"
    },
    6: {
      m: "m",
      n: "n",
      o: "o"
    },
    7: {
      p: "p",
      q: "q",
      r: "r",
      s: "s"
    },
    8: {
      t: "t",
      u: "u",
      v: "v"
    },
    9: {
      w: "w",
      x: "x",
      y: "y",
      z: "z"
    },
  };
  var wordString = "";
  var result = [];
  digitString.split('').forEach((char, index) => {
    if (char in charObject) {
      for (var key in charObject[char]) {
        result.push(wordString.slice(0, index).concat(key));
      }
    } else {
      wordString += char;
    }
  });
  return result;
}
telephoneWords("1123");