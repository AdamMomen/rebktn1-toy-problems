/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

// Output:string
// Input: string
// Constraints :none
// Edge cases: none

//pseudoCode:

// declare an object of time
// split the time to hours and minutes and the day period => by (:)
// check if it's pm or am
//  convert into time

//Time complexity
function toMilitary(time) {
  let timeObj = {
    "12pm": "12",
    "1pm": "13",
    "2pm": "14",
    "3pm": "15",
    "4pm": "16",
    "5pm": "17",
    "6pm": "18",
    "7pm": "19",
    "8pm": "20",
    "9pm": "21",
    "10pm": "22",
    "11pm": "23",
    "12am": "00"
  };
  const timeSplited = time.split(":");
  const hours = timeSplited[0] + timeSplited[1].slice(2);
  if (timeObj[hours]) {
    console.log(`${timeObj[hours]}:${timeSplited[1].split(/["pm", "am"]/)[0]}`);
  } else
    console.log(`${timeSplited[0]}:${timeSplited[1].split(/["pm", "am"]/)[0]}`);
}
toMilitary("3:00pm"); // "15:00"
toMilitary("9:15am"); // "09:15"
toMilitary("12:44am"); // "00:00"
toMilitary("04:00"); // "04:00"
