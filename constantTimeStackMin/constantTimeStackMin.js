/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
//  var example = new Stack()
//  example.push(4)
//  example.push(3)
//  example.min() === 3
//  example.push(3)
//  example.push(2)
//  example.push(2)
//  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.stack = {};
    this.key = 1;
    this.minVal = [];
  // add an item to the top of the stack
    this.push = function(value) {
      this.stack[this.key] = value;
      if (this.key === 1) {
        this.minVal.push(value);
      } else if (value <= this.minVal[this.minVal.length - 1]) {
        this.minVal.push(value);
      }
      this.key += 1;
    };

  // remove an item from the top of the stack
    this.pop = function() {
      if (this.size() > 0) {
        this.key -= 1;
        if (this.stack[this.key] === this.minVal[this.minVal.length - 1]) {
          this.minVal.pop();
        }
        delete this.stack[this.key];
      }
    };

  // return the number of items in the stack
    this.size = function() {
      return Object.keys(this.stack).length;
    };
  
  // return the minimum value in the stack
    this.min = function() {
      return this.minVal[this.minVal.length - 1];
    };

  };

