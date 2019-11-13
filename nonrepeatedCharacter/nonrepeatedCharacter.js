// jshint esversion:6
/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  let chars = {};
  for (let i = 0; i < string.length; i++) {
    if (!chars[string[i]]) {
      chars[string[i]] = {i, occ: 1};
    } else {
      chars[string[i]].occ += 1;
    }
  }
  let nonRepeating = Object.keys(chars).filter(char => {
    return chars[char].occ === 1;
  });
  let firstNonRepeatedCharacter = nonRepeating.sort((a, b) => {
    return chars[a].i - chars[b].i;
  })[0];
  return firstNonRepeatedCharacter;
};
