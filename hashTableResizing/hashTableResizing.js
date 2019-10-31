// jshint esversion:6
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

var makeHashTable = function(storageLimit = 4) {
  var result = {};
  result.storage = [];
  result.storageLimit = storageLimit;
  result.size = 0;

  result.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, result.storageLimit);
  var bucket = result.storage[index];
  if (!bucket) {
    var newBucket = [];
    result.storage[index] = newBucket;
  }
  if (result.storage[index].length > 0) {
    for (let i = 0; i < result.storage[index].length; i++) {
      if (result.storage[index][i][0] === k) {
        result.storage[index][i][1] = v;
      }
    }
  }
    result.storage[index].push([k, v]);
    result.size += 1;
    if (result.size > 0.75 * result.storageLimit) {
      result.storageLimit *= 2;
      let newHashTable = makeHashTable(result.storageLimit);
      for (let j = 0; j < result.storage.length; j++) {
        if (result.storage[j]) {
          for (let k = 0; k < result.storage[j].length; k++) {
            console.log(result.storage[j][k]);
            newHashTable.insert(result.storage[j][k][0], result.storage[j][k][1]);
          }
        }
      }
      result = newHashTable;
    }
  

    // TODO: implement `insert`

  };

  result.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, result.storageLimit);
  for (let i = 0; i < result.storage[index].length; i++) {
    if (result.storage[index][i][0] === k) {
      return result.storage[index][i][1];
    }
  }
    return undefined;
    // TODO: implement `retrieve`
  };

  result.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, result.storageLimit);
  for (let i = 0; i < result.storage[index].length; i++) {
    if (result.storage[index][i][0] === k) {
      delete result.storage[index][i];
      result.storage[index].splice(i, 1);
      result.size -= 1;
      if (result.size < 0.25 * result.storageLimit) {
        result.storageLimit /= 2;
        let newHashTable = makeHashTable(result.storageLimit);
        for (let j = 0; j < result.storage.length; j++) {
          for (let k = 0; k < result.storage[j].length; k++) {
            newHashTable.insert(result.storage[j][k][0], result.storage[j][k][1]);
          }
        }
        result = newHashTable;
      }
    }
  }
    // TODO: implement `remove`
  };

  return result;
};

var first = makeHashTable();
first.insert('name', 'Tom');
first.insert('age', 10);
first.insert('color', 'green');
first.insert('species', 'turtle');
