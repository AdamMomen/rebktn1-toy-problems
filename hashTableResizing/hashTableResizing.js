/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function(size = 4) {
  var result = {};
  var storage = [];
  var storageLimit = size;
  var size = 0;
  
  result.insert = function(value) {
    var index = getIndexBelowMaxForKey( value , storageLimit)
       storage[index] = value
       ++size;
  };

  result.retrieve = function(value) {
    var index = getIndexBelowMaxForKey( value , storageLimit)
    return storage[index]
  };

  result.remove = function(value) {   
  var index = getIndexBelowMaxForKey( value , storageLimit)
  var deleted = storage[index];
  delete storage[index];
  --size
   return deleted
  };

  return result;
};
//    Input:

// HT.insert({"foo":"bar"}) => ["",bar]
