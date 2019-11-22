// jshint esversion:6
/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange, i=0) {
  var changed = false;
  var deepEqual;
  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }
  for (let i = 0; i < Object.keys(apple).length; i++) {
    if (!Object.keys(orange).includes(Object.keys(apple)[i])) {
      return false;
    }
  }
  for (let j in apple) {
    if (typeof(apple[j]) !== 'object' && apple[j] === orange[j]) {
      continue;
    } else if (typeof(apple[j]) === 'object') {
      deepEqual = deepEquals(apple[j], orange[j], i + 1);
        changed = true;
    } else {
      return false;
    }
  }
  if (changed) {
    return deepEqual;
  } else {
    return true;
  }

};
