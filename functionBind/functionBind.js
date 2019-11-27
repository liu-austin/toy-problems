// jshint esversion:6
/*
 * function bind():
 *
 * example 1:
 *
 var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
 }
 var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 var func = function(a, b){ return a + b };
 var boundFunc = bind(func, null, 'foo');
 var result = boundFunc('bar');
 result === 'foobar'; // true
 *
*/

var bind = function(function1, obj) {
  // TODO: Your code here
    return (function(...args) {
        let argArr = args.filter(arg => arg !== null);
        return function1.call(obj, argArr);
    });
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(scope) {
  // TODO: Your code here
  var fn = this;
  return function () {
      return fn.apply(scope);
  };
};
