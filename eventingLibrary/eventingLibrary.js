/*
Make an eventing system mix-in that adds .trigger() and .on() to any input object.
Example usage:
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(){ // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
Caveats:
  • mixEvents should return the original object it was passed after extending it.
  • If we repeatedly call .on with the same event name, it should continue to call the old function as well. That is to say, we can have multiple listeners for an event.
  • If obj.trigger is called with additional arguments, pass those to the listeners.
  • It is not necessary to write a way to remove listeners.
*/
// Input: object
// Output: Object
// Constraints: none
// edge Case: calling the obj repeatively

//questions
// are the events hardcoded
var mixEvents = function(obj) {
  var events = {
    ageChange: callback => {
      proxy = new Proxy(obj, {
        set: function(object, property, value, proxy) {
          callback();
        }
      });
    }
  };

  obj.trigger = function(event) {
    // your code here...
  };

  // Register a callback to be fired on this event.
  obj.on = function(event, callback) {
    // this might call obj.trigger function
  };
  return obj;
};
